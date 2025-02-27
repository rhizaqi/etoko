"use server";

import { redirect } from "next/navigation";
import { ActionResult } from "@/types";

async function signin(_: unknown, formData: FormData): Promise<ActionResult> {
  console.log(formData.get("email"));
  console.log(formData.get("password"));

  console.log(formData, `mau tau formdata`);

  return redirect("/dashboard/signin");
}

export default signin;
