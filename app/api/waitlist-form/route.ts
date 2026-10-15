import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { name?: unknown; email?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!emailPattern.test(email) || email.length > 320) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const supabase = createClient(await cookies());
  const { error } = await supabase.from("waitlist").insert({ name, email });

  if (error) {
    console.error(error);
    if (error.code === "23505") {
      return NextResponse.json({ message: "You're already on the list!" });
    }
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ message: "You're on the list!" }, { status: 201 });
}
