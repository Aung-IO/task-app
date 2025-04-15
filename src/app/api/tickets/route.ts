import { createClient } from "@/app/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(requset: NextRequest) {
  const ticket = await requset.json();

  //  create supabase instance
  const supabase = await createClient();

  // add current logged in user email
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("User : ", user);

  if (!user ) {
    return NextResponse.json(
      { error: "User is not authenticated" },
      { status: 401 }
    );
  }

  console.log("Ticket Data :", ticket);

  // insert data

  const { data, error } = await supabase
    .from("tickets")
    .insert({
      ...ticket,
      user_email: user.email,
    })
    .select()
    .single();

  // Log error to check if there were any issues
  if (error) {
    console.error("Insert Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Log data to verify insertion result
  console.log("Inserted Data:", data);

  return NextResponse.json({ data });
}
