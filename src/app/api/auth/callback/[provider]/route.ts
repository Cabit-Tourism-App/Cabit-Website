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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ provider: string }> }
) {
  const { provider: rawProvider } = await params;
  const code = request.nextUrl.searchParams.get("code")
  const state = request.nextUrl.searchParams.get("state")
  const provider = z.enum(oAuthProviders).parse(rawProvider)

  if (typeof code !== "string" || typeof state !== "string") {
    redirect(
      `/sign-in?oauthError=${encodeURIComponent(
        "Failed-to-connect.-Please-try-again."
      )}`
    )
  }

  const oAuthClient = getOAuthClient(provider)
  try {
    const oAuthUser = await oAuthClient.fetchUser(code, state, await cookies())
    console.log("OAuth User Info:", oAuthUser)
    const user = await connectUserToAccount(oAuthUser, provider)
    await createUserSession(user, await cookies())
  } catch (error) {
    console.error(error)
    redirect(
      `/sign-in?oauthError=${encodeURIComponent(
        "Failed to connect. Please try again."
      )}`
    )
  }

  redirect("/")
}

function connectUserToAccount(
  { id, email, name }: { id: string; email: string; name: string },
  provider: OAuthProvider
) {
  return db.transaction(async trx => {
    // Check if the user already exists by email
    let user = await trx.query.UserTable.findFirst({
      where: eq(UserTable.email, email),
      columns: { user_id: true, role: true },
    })

    if (user == null) {
      // Insert new user if not found
      const [newUser] = await trx
        .insert(UserTable)
        .values({
          email: email,
          user_name: name,
        })
        .returning({ user_id: UserTable.user_id, role: UserTable.role })
      user = newUser
    }

    // Link OAuth account to the user (ignore duplicates)
    await trx
      .insert(UserOAuthAccountTable)
      .values({
        user_id: user.user_id,
        provider: provider,
        providerAccountId: id,
      })
      .onConflictDoNothing();

    return user
  })
}

export const config = {
  runtime: "nodejs",
}
