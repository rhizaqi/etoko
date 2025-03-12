"use server";

import { ActionResult } from "@/types";
import { redirect } from "next/navigation";

export async function Logout(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  console.log("logout di action lib index");

  return redirect("/");
}
