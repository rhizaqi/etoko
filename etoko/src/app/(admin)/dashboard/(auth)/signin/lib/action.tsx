"use server";

import { redirect } from "next/navigation";
import { ActionResult } from "@/types";
import { schemaSign } from "@/lib/schema";
import { error } from "console";

async function signin(_: unknown, formData: FormData): Promise<ActionResult> {
  // console.log(formData.get("email"));
  // console.log(formData.get("password"));

  // console.log(formData, `mau tau formdata`);

  const validate = schemaSign.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (validate.success === false) {
    console.log(validate.error.errors[0].message, 111111111111111);
    return {
      error: validate.error.errors[0].message,
    };
  }

  return redirect("/dashboard/signin");
}

export default signin;
