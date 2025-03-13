import type { Metadata } from "next";
import "../../../../globals.css";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

// ini layout "AUTH" group folder

export const metadata: Metadata = {
  title: "Etoko",
  description: "Etoko dashboard ya",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { session, user } = await getUser();

  // if (session && user === "superAdmin") {
  //   return redirect("/dashboard");
  // } // LANJUT DISINI

  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
