import type { Metadata } from "next";
import "../../../../globals.css";

// ini layout "AUTH" group folder

export const metadata: Metadata = {
  title: "Etoko",
  description: "Etoko dashboard ya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
