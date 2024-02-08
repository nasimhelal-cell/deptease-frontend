"use client";

import Input from "@/components/input/Input";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.table(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input
        id={"email"}
        type={"email"}
        pattern="(^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$)"
        placeholder="Email"
        name={"email"}
        onChange={setEmail}
        required
      />

      <Input
        id={"password"}
        type={"password"}
        placeholder="Password"
        name={"password"}
        onChange={setPassword}
        required
      />

      <input type="submit" value={"Sign-in"} className="self-end" />
    </form>
  );
}
