import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/profile"}>profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
