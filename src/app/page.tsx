"use client";
import DropDown from "@/components/common/DropDown";
import GetInput from "@/components/common/GetInput";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DropDown
        lists={[
          { title: "nasim", value: "nasim" },
          { title: "helal", value: "helal" },
        ]}
        placeholder="select an item"
        value={value}
        onChange={setValue}
      />

      <GetInput
        type="email"
        placeholder="email"
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    </main>
  );
}
