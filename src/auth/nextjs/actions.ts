"use server"

import { z } from "zod"
import { redirect } from "next/navigation"
import { signInSchema, signUpSchema } from "./schemas"
import { db } from "../../drizzle/db"
import { OAuthProvider, UserTable } from "../../drizzle/schema"
import { eq } from "drizzle-orm"
import {
  comparePasswords,
  generateSalt,
  hashPassword,
} from "../core/passwordHasher"
import { cookies } from "next/headers"
import { createUserSession, removeUserFromSession } from "../core/session"
import { getOAuthClient } from "../core/oauth/base"

export async function signIn(unsafeData: z.infer<typeof signInSchema>) {
 
  const { success, data } = signInSchema.safeParse(unsafeData)

  if (!success) return "Unable to log you in"



 console.log(data)
  const user = await db.query.UserTable.findFirst({
    columns: { user_password: true, salt: true, user_id: true, email: true, role: true },
    where: eq(UserTable.email, data.email),
  })
  console.log("the users here:",user)
  if (user == null || user.user_password == null || user.salt == null) {
    return "Unable to log you in uh?????"
  }

  const isCorrectPassword = await comparePasswords({
    hashedPassword: user.user_password,
    password: data.password,
    salt: user.salt,
  })

  if (!isCorrectPassword) return "Unable to log you in"

  await createUserSession(user, await cookies())
  redirect("/Dashboard")
}

export async function signUp(unsafeData: z.infer<typeof signUpSchema>) {
  const result = signUpSchema.safeParse(unsafeData);
  
if (!result.success) {
  console.error("Schema validation failed:", result.error.format());
  return "Need more that 8 letter password";
}

const data = result.data; // Now data is guaranteed to be valid



  const existingUser = await db.query.UserTable.findFirst({
    where: eq(UserTable.email, data.email),
  })


  if (existingUser != null) return "Account already exists for this email"

    console.log(data)
  try {

    const salt1 = generateSalt()

    const hashedPassword = await hashPassword(data.password, salt1)

    const [user] = await db.insert(UserTable).values({user_name: data.name,email: data.email,user_password: hashedPassword,salt:salt1,user_phone: data.phone,}).returning({user_id: UserTable.user_id,role: UserTable.role,});

    if (user == null) return "Unable to create account2"


    await createUserSession(user, await cookies())//causing error idk why 

  } 
  catch (error) {
   
    return "Unable to create account3"

  }

  redirect("/Dashboard")
}

export async function logOut() {
  await removeUserFromSession(await cookies())
  redirect("/")
}

export async function oAuthSignIn(provider: OAuthProvider) {
  const oAuthClient = getOAuthClient(provider)
  redirect(oAuthClient.createAuthUrl(await cookies()))
}
