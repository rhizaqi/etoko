import type { Metadata } from "next";
import "../../../globals.css";

// ini layout "AUTH" group folder

export const metadata: Metadata = {
  title: "Etoko",
  description: "Etoko ini coba-coba ya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
