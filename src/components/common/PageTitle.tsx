"use client";

import { usePathname } from "next/navigation";
import { H2 } from "./TypoGraphy";

const PageTitle = () => {
  const pathname = usePathname();
  return <H2 className="capitalize" text={pathname.slice(1)} />;
};

export default PageTitle;
