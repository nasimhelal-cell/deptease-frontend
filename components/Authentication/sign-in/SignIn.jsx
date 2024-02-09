"use client";

import Input from "@/components/input/Input";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reg, setReg] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let userLoginData = { email, password, reg };
      let res = await fetch("http://localhost:4444/api/v1/students/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userLoginData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        toast.error(JSON.parse(errorText).message);
        return;
      }
      toast.success("Congrats you are logged in");
      Cookies.set("reg", reg);
      router.push("/students");
    } catch (error) {
      console.error("Error happened when signing in", error);
    }
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

      <Input
        id={"reg"}
        placeholder="reg"
        name={"reg"}
        onChange={setReg}
        required
      />
      <div className="w-full flex items-center justify-between">
        <span>
          {`Don't have account?`}
          <span className="text-blue-400 ">
            <Link href="/sign-up"> Sign-up </Link>
          </span>
        </span>
        <input type="submit" value={"Sign-in"} className="self-end" />
      </div>
    </form>
  );
}
