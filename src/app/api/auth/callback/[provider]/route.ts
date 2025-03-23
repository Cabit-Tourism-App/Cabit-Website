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

// Strong typing for OAuth params
interface OAuthParams {
  provider: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<OAuthParams> }
): Promise<void> {
  const { provider: rawProvider } = await params

  const code: string | null = request.nextUrl.searchParams.get("code")
  const state: string | null = request.nextUrl.searchParams.get("state")

  // Validate provider strictly
  const provider: OAuthProvider = z.enum(oAuthProviders).parse(rawProvider)

  if (typeof code !== "string" || typeof state !== "string") {
    redirect(`/sign-in?oauthError=${encodeURIComponent("Failed-to-connect.-Please-try-again.")}`)
  }

  const oAuthClient = getOAuthClient(provider)

  try {
    const oAuthUser = await oAuthClient.fetchUser(code, state, await cookies())
    console.log("OAuth User Info:", oAuthUser)

    const user = await connectUserToAccount(oAuthUser, provider)
    await createUserSession(user, await cookies())
  } catch (error) {
    console.error(error)
    redirect(`/sign-in?oauthError=${encodeURIComponent("Failed to connect. Please try again.")}`)
  }

  redirect("/Dashboard")
}

// Strict typing for OAuth User object
interface OAuthUser {
  id: string
  email: string
  name: string
}

type UserRole = "user" | "driver" | "admin"

async function connectUserToAccount(
  { id, email, name }: OAuthUser,
  provider: OAuthProvider
): Promise<{ user_id: number; role: UserRole }> {
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

    // Validate and assert role
    const allowedRoles: UserRole[] = ["user", "driver", "admin"]
    if (!allowedRoles.includes(user.role as UserRole)) {
      throw new Error(`Invalid role fetched from DB: ${user.role}`)
    }

    await trx
      .insert(UserOAuthAccountTable)
      .values({
        user_id: user.user_id,
        provider,
        providerAccountId: id,
      })
      .onConflictDoNothing()

    // ✅ Type narrowed to UserRole
    return { user_id: user.user_id, role: user.role as UserRole }
  })
}

export const config = {
  runtime: "nodejs",
}
