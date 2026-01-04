import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("auth-session");
    const username = cookieStore.get("auth-username");

    if (session && username) {
      return NextResponse.json(
        { authenticated: true, username: username.value },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
