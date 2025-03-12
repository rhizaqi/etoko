"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Home() {
  const testClick = async () => {
    redirect("/dashboard");
  };
  return (
    <div className="p-5">
      <Button onClick={testClick}>Submit </Button>
    </div>
  );
}
