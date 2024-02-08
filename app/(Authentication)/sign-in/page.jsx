import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import SignFromWrapper from "@/components/common/SignFormWrapper";
import SignIn from "@/components/Authentication/sign-in/SignIn";

const SignInPage = () => {
  return (
    <SignFromWrapper
      className={"w-1/2"}
      title={"Sign In"}
      icon={<IoCheckmarkDone className="text-4xl fill-white " />}
    >
      <SignIn />
    </SignFromWrapper>
  );
};

export default SignInPage;
