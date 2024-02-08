import SignUp from "@/components/Authentication/sign-up/SignUp";
import SignFromWrapper from "@/components/common/SignFormWrapper";
import { TbShieldLockFilled } from "react-icons/tb";

const SignUpPage = () => {
  return (
    <SignFromWrapper
      title={"Sign up"}
      icon={<TbShieldLockFilled className="text-4xl " />}
    >
      <SignUp />
    </SignFromWrapper>
  );
};

export default SignUpPage;
