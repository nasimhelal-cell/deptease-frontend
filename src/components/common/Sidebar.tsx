"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarItems } from "@/lib/sidebarItems";
import { Sidebar } from "flowbite-react";
import { nanoid } from "nanoid";
import { BiMessageDetail } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { HiChartPie, HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";

import { twMerge } from "tailwind-merge";
import DeptInfo from "../client/DeptInfo";

export function SidebarNav() {
  return (
    <nav className="h-full flex flex-col shadow-primary bg-background">
      <DeptInfo />
      <ScrollArea className="h-full flex-1 w-[300px] rounded-md ">
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className="capitalize"
        >
          <Sidebar.Items className="text-sm">
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="/department/dashboard"
                icon={HiChartPie}
                className="hover:bg-input"
              >
                dashboard
              </Sidebar.Item>

              {SidebarItems?.map((item) => {
                return (
                  <Sidebar.Collapse
                    key={nanoid()}
                    icon={item.icon}
                    label={item.label}
                    className="flex gap-3 capitalize hover:bg-input"
                    renderChevronIcon={(theme, open) => {
                      const IconComponent = open
                        ? HiOutlineMinusSm
                        : HiOutlinePlusSm;

                      return (
                        <IconComponent
                          aria-hidden
                          className={twMerge(
                            theme.label.icon.open[open ? "on" : "off"]
                          )}
                        />
                      );
                    }}
                  >
                    {item.items.map((newItem) => {
                      return (
                        <Sidebar.Item
                          key={nanoid()}
                          href={newItem.href}
                          className="hover:bg-input"
                        >
                          {newItem.title}
                        </Sidebar.Item>
                      );
                    })}
                  </Sidebar.Collapse>
                );
              })}

              <Sidebar.Item
                href="/department/messages"
                icon={BiMessageDetail}
                className="hover:bg-input"
              >
                Messaging
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={CiLogout} className="hover:bg-input">
                logout
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </ScrollArea>
    </nav>
  );
}
