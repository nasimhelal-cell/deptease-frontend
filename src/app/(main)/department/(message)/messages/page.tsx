"use client";

import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import DropDown, { List } from "@/components/common/DropDown";
import { useState } from "react";
import { P } from "@/components/common/TypoGraphy";

let messageToDropDownList: List[] = [
  {
    title: "All Students",
    value: "all-students",
  },
  {
    title: "All Teachers",
    value: "all-teachers",
  },
  {
    title: "Specific Student",
    value: "specific-student",
  },
  {
    title: "Specific Teacher",
    value: "specific-teacher",
  },
  {
    title: "Students By Class",
    value: "students-by-class",
  },
];

let teacherList: List[] = [
  {
    title: "X",
    value: "x",
  },
  { title: "Y", value: "y" },
];

export default function MessagePage() {
  const [receiver, setReceiver] = useState("");
  return (
    <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3 min-h-[85vh]">
      <div
        className="relative hidden flex-col items-start gap-8 md:flex"
        x-chunk="dashboard-03-chunk-0"
      >
        <form className="grid w-full items-start gap-6">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">Message</legend>
            <div className="grid gap-3">
              <Label htmlFor="person">Message to</Label>
              <DropDown
                lists={messageToDropDownList}
                onChange={setReceiver}
                value={receiver}
                placeholder="Select a person"
              />
            </div>
          </fieldset>
          {
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">
                More filter
              </legend>

              {receiver === "specific-teacher" ? (
                <div className="grid gap-3">
                  <Label htmlFor="role">Select teacher</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a teacher" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="system">System</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="assistant">Assistant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ) : receiver === "specific-student" ? (
                <div className="grid gap-3">
                  <Label htmlFor="role">Search Student</Label>
                  <Input type="text" placeholder="Type Student's name" />
                </div>
              ) : receiver === "students-by-class" ? (
                <div className="grid gap-3">
                  <Label htmlFor="role">Search Student</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a teacher" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="system">System</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="assistant">Assistant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <P text="No need to filter" />
              )}
            </fieldset>
          }
        </form>
      </div>
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
        <Badge variant="outline" className="absolute right-3 top-3">
          Output
        </Badge>
        <div className="flex-1" />
        <form
          className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
          x-chunk="dashboard-03-chunk-1"
        >
          <Label htmlFor="message" className="sr-only">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Type your message here..."
            className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
          />
          <div className="flex items-center p-3 pt-0">
            <Button variant="ghost" size="icon">
              <Paperclip className="size-4" />
              <span className="sr-only">Attach file</span>
            </Button>

            <Button type="submit" size="sm" className="ml-auto gap-1.5">
              Send Message
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
