"use client";

import { useState } from "react";
import Input from "../../input/Input";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reg, setReg] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    let userData = { firstName, lastName, email, password, reg };
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:4444/api/v1/students/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!res.ok) {
        const errorText = await res.text();
        toast.error(JSON.parse(errorText).message);
        return;
      }
      toast.success("Congrats you are a member of DeptEase");
      router.push("/sign-in");
    } catch (error) {
      console.error("Error during sign-up", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-5">
        <Input
          id={"firstName"}
          type="text"
          placeholder="First name"
          name={"firstName"}
          onChange={setFirstName}
          minLength="3"
          title="firstName"
          required
        />
        <Input
          id={"lastName"}
          type="text"
          placeholder="Last name"
          name={"lastName"}
          onChange={setLastName}
          minLength="3"
          required
        />
      </div>

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
        pattern="(^[0-9]{4}$)"
        title="Reg will be a number with 4 digits only"
        required
      />

      <button type="submit" className="self-end">
        Sign-up
      </button>
    </form>
  );
}
