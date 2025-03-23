import { getOAuthClient } from "../../../../../auth/core/oauth/base"
import { createUserSession } from "../../../../../auth/core/session"
import { db } from "../../../../../drizzle/db"
import {
  OAuthProvider,
  oAuthProviders,
  UserOAuthAccountTable,
  UserTable,
} from "../../../../../drizzle/schema"
import { eq } from "drizzle-orm"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { NextRequest } from "next/server"
import { z } from "zod"

// OAuth params type
interface OAuthParams {
  provider: string
}

// OAuth user type
interface OAuthUser {
  id: string
  email: string
  name: string
}

type UserRole = "user" | "driver" | "admin" | null

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<OAuthParams> }
): Promise<void> {
  const { provider: rawProvider } = await params

  const code: string | null = request.nextUrl.searchParams.get("code")
  const state: string | null = request.nextUrl.searchParams.get("state")

  // Strict provider validation
  const provider: OAuthProvider = z.enum(oAuthProviders).parse(rawProvider)

  if (!code || !state) {
    redirect(`/sign-in?oauthError=${encodeURIComponent("Failed-to-connect.-Please-try-again.")}`)
  }

  const oAuthClient = getOAuthClient(provider)

  try {
    const oAuthUser: OAuthUser = await oAuthClient.fetchUser(code, state, await cookies())
    console.log("OAuth User Info:", oAuthUser)

    const user = await connectUserToAccount(oAuthUser, provider)

    // ✅ user_id is UUID string, role can be nullable
    await createUserSession(user, await cookies())
  } catch (error) {
    console.error(error)
    redirect(`/sign-in?oauthError=${encodeURIComponent("Failed to connect. Please try again.")}`)
  }

  redirect("/Dashboard")
}

async function connectUserToAccount(
  { id, email, name }: OAuthUser,
  provider: OAuthProvider
): Promise<{ user_id: string; role: UserRole }> {
  return await db.transaction(async trx => {
    let user = await trx.query.UserTable.findFirst({
      where: eq(UserTable.email, email),
      columns: { user_id: true, role: true },
    })

    if (!user) {
      const [newUser] = await trx
        .insert(UserTable)
        .values({
          email,
          user_name: name,
        })
        .returning({ user_id: UserTable.user_id, role: UserTable.role })

      if (!newUser) {
        throw new Error("Failed to create new user during OAuth connection.")
      }
      user = newUser
    }

    await trx
      .insert(UserOAuthAccountTable)
      .values({
        user_id: user.user_id,
        provider,
        providerAccountId: id,
      })
      .onConflictDoNothing()

    // ✅ Ensure correct typing
    return { user_id: user.user_id, role: user.role }
  })
}

export const config = {
  runtime: "nodejs",
}
