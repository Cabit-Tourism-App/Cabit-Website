import { cookies } from "next/headers"
import { getUserFromSession } from "../core/session"
import { cache } from "react"
import { redirect } from "next/navigation"
import { db } from "../../drizzle/db"
import { eq } from "drizzle-orm"
import { UserTable } from "../../drizzle/schema"

async function getUserFromDb(id: string) {
  console.log("Fetching user from DB for ID:", id)
  
  const user = await db.query.UserTable.findFirst({
    columns: { id: true, email: true, role: true, name: true },
    where: eq(UserTable.id, id),
  })
  
  console.log("DB User Result:", user)
  return user
}



type FullUser = Exclude<
  Awaited<ReturnType<typeof getUserFromDb>>,
  undefined | null
>

type User = Exclude<
  Awaited<ReturnType<typeof getUserFromSession>>,
  undefined | null
>

function _getCurrentUser(options: {
  withFullUser: true
  redirectIfNotFound: true
}): Promise<FullUser>
function _getCurrentUser(options: {
  withFullUser: true
  redirectIfNotFound?: false
}): Promise<FullUser | null>
function _getCurrentUser(options: {
  withFullUser?: false
  redirectIfNotFound: true
}): Promise<User>
function _getCurrentUser(options?: {
  withFullUser?: false
  redirectIfNotFound?: false
}): Promise<User | null>
async function _getCurrentUser({
  withFullUser = false,
  redirectIfNotFound = false,
} = {}) {
  console.log("getCurrentUser called with:", { withFullUser, redirectIfNotFound })

  const sessionCookies = await cookies()
  console.log("Session Cookies:", sessionCookies)
  
  const user = await getUserFromSession(sessionCookies)
  console.log("Session User:", user)

  if (user == null) {
    console.log("No user found in session.")
    if (redirectIfNotFound) {
      console.log("Redirecting to /sign-in")
      return redirect("/sign-in")
    }
    return null
  }

  if (withFullUser) {
    console.log("Fetching full user from DB for ID:", user.user_id)
    const fullUser = await getUserFromDb(user.userId)

    if (fullUser == null) {
      console.error("ERROR: User found in session but missing in DB")
      throw new Error("User not found in database")
    }

    console.log("Full user retrieved:", fullUser)
    return fullUser
  }

  console.log("Returning session user:", user)
  return user
}

export const getCurrentUser = cache(_getCurrentUser)
