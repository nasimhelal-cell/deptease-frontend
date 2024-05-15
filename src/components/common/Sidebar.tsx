"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarItems } from "@/lib/sidebarItems";
import { Sidebar } from "flowbite-react";
import { nanoid } from "nanoid";
import {
  HiChartPie,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiTable,
} from "react-icons/hi";
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
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/dashboard" icon={HiChartPie}>
                dashboard
              </Sidebar.Item>

              {SidebarItems?.map((item) => {
                return (
                  <Sidebar.Collapse
                    key={nanoid()}
                    icon={item.icon}
                    label={item.label}
                    className="flex gap-3 capitalize"
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
                        <Sidebar.Item key={nanoid()} href={newItem.href}>
                          {newItem.title}
                        </Sidebar.Item>
                      );
                    })}
                  </Sidebar.Collapse>
                );
              })}

              <Sidebar.Item href="#" icon={HiTable}>
                logout
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </ScrollArea>
    </nav>
  );
}
