import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { H3, H4, P } from "../common/TypoGraphy";

const DeptInfo = () => {
  return (
    <div className="p-5">
      <H3 text="Islamic University" />
      <div className="flex gap-2">
        <div>
          <Avatar className="size-16">
            <AvatarImage src="https://github.com/shadcn.ng" />
            <AvatarFallback>CSE</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <P text="Welcome to" />
          <H4 text="CSE" />
        </div>
      </div>
    </div>
  );
};

export default DeptInfo;
