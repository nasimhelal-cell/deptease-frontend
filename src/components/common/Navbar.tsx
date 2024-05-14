"use client";
import { Button } from "@/components/ui/button";
import { Navbar } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";
import Logo from "./Logo";

const GetNavbar = () => {
  return (
    <Navbar
      fluid={true}
      className="w-full shadow-sm hover:shadow-md duration-300 backdrop-blur-2xl"
    >
      <Navbar.Container className="flex items-center justify-between w-full">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="About" />
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link linkName="Home" />
              <Navbar.Link linkName="Projects" />
              <Navbar.Link linkName="Blogs" />
              <Navbar.Link linkName="News" />
              <Navbar.Link linkName="Resources" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-5">
          <Button>Sign-Up</Button>
          <Button variant={"secondary"}>Login</Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default GetNavbar;
