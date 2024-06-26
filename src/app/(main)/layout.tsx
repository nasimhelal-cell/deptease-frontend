import type { Metadata } from "next";

import { SidebarNav } from "@/components/common/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import PageTitle from "@/components/common/PageTitle";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "DeptEase | Dashboard",
  description: "Generated by create next app",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen flex">
      <SidebarNav />
      <ScrollArea className="w-full h-full flex-1 flex flex-col">
        <header className="flex items-center px-4 md:px-8 pt-4 md:pt-8 ">
          <PageTitle />
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
        </header>

        <div className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-8">
          {children}
        </div>
      </ScrollArea>
    </section>
  );
}
