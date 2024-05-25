"use client";

import { usePathname } from "next/navigation";
import { H2 } from "./TypoGraphy";

const PageTitle = () => {
  const pathname = usePathname();
  let path = pathname.split("/");
  return (
    <H2
      className="capitalize"
      text={path[path.length - 1].split("-").join(" ")}
    />
  );
};

export default PageTitle;
