import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h1 className="text-primary text-4xl font-bold">DeptEase</h1>
    </Link>
  );
};

export default Logo;
