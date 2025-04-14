"use server";
import { createClient } from "@/app/utils/supabase/server";
import { redirect } from "next/navigation";


export async function signup(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    console.error("Supabase signup error:", error.message);
    return { error: error.message };
  }
  return { success: true };

    if (!error) {
      redirect("/verify");
    }
}
