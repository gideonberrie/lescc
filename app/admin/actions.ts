"use server";

import { cookies } from "next/headers";

const COOKIE_NAME = "admin_session";

export async function login(formData: FormData) {
  const password = formData.get("password");
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (adminPassword && password === adminPassword) {
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, adminPassword, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/admin",
      maxAge: 60 * 60 * 24 * 30,
    });
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function isAuthed() {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value === adminPassword;
}
