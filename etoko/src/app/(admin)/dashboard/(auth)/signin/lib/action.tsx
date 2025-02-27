"use server";

import { redirect } from "next/navigation";
import { ActionResult } from "@/types";

async function signin(_: unknown, formData: FormData): Promise<ActionResult> {
  console.log(formData.get("email"));
  
  return redirect("/dashboard/signin");
}

export default signin;