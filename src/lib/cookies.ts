"use server";

import { cookies } from "next/headers";

// Create a session (Set a cookie)
export async function createSession(name: string, value: string) {
  (await cookies()).set(name, value, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}

// Remove a session (Delete a cookie)
export async function removeSession(name: string) {
  (await cookies()).set(name, "", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
    expires: new Date(0),
  });
}

// Get session data (Retrieve a cookie)
export async function getSession(name: string) {
  return (await cookies()).get(name)?.value;
}
