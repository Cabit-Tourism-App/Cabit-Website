import { roleEnum, SessionTable } from "../../drizzle/schema"
import { eq } from "drizzle-orm"
import { z } from "zod"
import { randomUUID } from "crypto";

import { db } from "../../drizzle/db"


// 1 day in seconds
const SESSION_EXPIRATION_SECONDS = 60 * 60 * 24
const COOKIE_SESSION_KEY = "session-id"

const sessionSchema = z.object({
  userId: z.string(),
  role: z.enum(roleEnum.enumValues as [string, ...string[]]),
})

type UserSession = z.infer<typeof sessionSchema>

export type Cookies = {
  set: (
    key: string,
    value: string,
    options: {
      secure?: boolean
      httpOnly?: boolean
      sameSite?: "strict" | "lax"
      expires?: Date
    }
  ) => void
  get: (key: string) => { name: string; value: string } | undefined
  delete: (key: string) => void
}

export async function getUserFromSession(cookies: Pick<Cookies, "get">) {
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value

  if (!sessionId) return null

  return await getUserSessionById(sessionId)
}

export async function updateUserSessionData(
  user: UserSession,
  cookies: Pick<Cookies, "get">
) {
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value
  if (!sessionId) return null
    console.log("found the culprit",user)
  await db.update(SessionTable)
    .set({ role: user.role })
    .where(eq(SessionTable.id, sessionId))
}

export async function createUserSession(
  user: UserSession,
  cookies: Pick<Cookies, "set">
) {
  console.log(cookies)

  const sessionId = randomUUID();
  console.log(user)
  await db.insert(SessionTable).values({
    id: sessionId,
    userId: user.user_id,
    role: user.role ?? 'user',// Default to 'user' if null
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + SESSION_EXPIRATION_SECONDS * 1000),
  })
  setCookie(sessionId, cookies)
}

export async function updateUserSessionExpiration(
  cookies: Pick<Cookies, "get" | "set">
) {
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value
  if (!sessionId) return null

  const user = await getUserSessionById(sessionId)
  if (!user) return

  await db.update(SessionTable)
    .set({ expiresAt: new Date(Date.now() + SESSION_EXPIRATION_SECONDS * 1000) })
    .where(eq(SessionTable.id, sessionId))

  setCookie(sessionId, cookies)
}

export async function removeUserFromSession(
  cookies: Pick<Cookies, "get" | "delete">
) {
  const sessionId = cookies.get(COOKIE_SESSION_KEY)?.value
  if (!sessionId) return null

  await db.delete(SessionTable).where(eq(SessionTable.id, sessionId))
  cookies.delete(COOKIE_SESSION_KEY)
}

function setCookie(sessionId: string, cookies: Pick<Cookies, "set">) {
  cookies.set(COOKIE_SESSION_KEY, sessionId, {
    secure: true,
    httpOnly: true,
    sameSite: "lax",
    expires: new Date(Date.now() + SESSION_EXPIRATION_SECONDS * 1000),
  })
}

async function getUserSessionById(sessionId: string) {

  const session = await db.select().from(SessionTable).where(eq(SessionTable.id, sessionId))

  if (session.length === 0) return null
  console.log(session)

  const { success, data: user } = sessionSchema.safeParse(session[0])
  return success ? user : null
}
