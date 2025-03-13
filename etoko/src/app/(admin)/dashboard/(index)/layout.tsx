import type { Metadata } from "next";
import "../../../globals.css";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarInsert, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/ui/site-header";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

// ini layout "DASHBOARD" group folder

export const metadata: Metadata = {
  title: "Etoko/Dashboard",
  description: "Etoko dashboard ya",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { session } = await getUser();

  if (!session) {
    return redirect("/dashboard/signin");
  }
  return (
    <div>
      <div className="[--header-height:calc(theme(spacing.14))]">
        <SidebarProvider className="flex flex-col">
          <SiteHeader />
          <div className="flex flex-1">
            <AppSidebar />
            <SidebarInsert>
              <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                  <div className="aspect-video rounded-xl bg-muted/50">
                    {children}
                  </div>
                  <div className="aspect-video rounded-xl bg-muted/50">
                    {/* {children} */}
                  </div>
                  <div className="aspect-video rounded-xl bg-muted/50">
                    {/* {children} */}
                  </div>
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            </SidebarInsert>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
