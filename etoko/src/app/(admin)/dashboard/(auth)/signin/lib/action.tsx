"use server";

import { redirect } from "next/navigation";
import { ActionResult } from "@/types";
import { schemaSign } from "@/lib/schema";
import prisma from "../../../../../../../lib/prisma";
import bcrypt from "bcrypt";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";

async function signin(_: unknown, formData: FormData): Promise<ActionResult> {
  // console.log(formData.get("email"));
  // console.log(formData.get("password"));

  // console.log(formData, `mau tau formdata`);

  const validate = schemaSign.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (validate.success === false) {
    console.log(validate, 111111111111111);
    return {
      error: validate.error.errors[0].message,
    };
  }

  const existingUser = await prisma.users.findFirst({
    where: {
      email: validate.data.email,
      role: "superAdmin",
    },
  });

  if (!existingUser) {
    return {
      error: "Email not found",
    };
  }

  const comparePassword = bcrypt.compareSync(
    validate.data.password,
    existingUser.password
  );

  if (!comparePassword) {
    return {
      error: `Password is incorrect`,
    };
  }

  const session = await lucia.createSession(existingUser.id.toString(), {});
  // const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  (await cookies()).set(
    sessionCookie.name, // sebagai key
    sessionCookie.value,
    sessionCookie.attributes
  );

  await prisma.session.create({
    data: {
      id: session.id, // Use the session ID from Lucia
      userId: existingUser.id, // Use the user ID from the existing user (integer)
      expiresAt: new Date(), // Set expiry date
    },
  });

  return redirect("/dashboard");
}

export default signin;
