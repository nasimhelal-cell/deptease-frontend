"use client";
import { Button } from "@/components/ui/button";
import { Navbar } from "flowbite-react";
import Logo from "./Logo";
import Link from "next/link";
import Alert from "./Alert";
import SignUpForm from "../client/auth/SignUp";
import Modal from "./Modal";
import LoginForm from "../client/auth/Login";

const GetNavbar = () => {
  return (
    <Navbar className="shadow-md hover:shadow-lg flex items-center min-h-[70px] max-h-[70px] h-[70px]">
      <Navbar.Brand href="https://flowbite-react.com">
        <Logo />
      </Navbar.Brand>
      <div className="flex gap-5">
        <Link href="#">Services</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Contact</Link>
        <Link href="#">About</Link>
      </div>
      <div className="flex gap-5">
        <Modal button={<Button>{`Sign up`}</Button>} className="p-0 w-auto">
          <SignUpForm />
        </Modal>
        <Modal
          button={<Button variant={"secondary"}>Login</Button>}
          className="p-0 w-auto"
        >
          <LoginForm />
        </Modal>
      </div>
    </Navbar>
  );
};

export default GetNavbar;
