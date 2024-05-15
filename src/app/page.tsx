import SignUpForm from "@/components/client/auth/SignUp";
import Alert from "@/components/common/Alert";
import Modal from "@/components/common/Modal";
import GetNavbar from "@/components/common/Navbar";
import { H1, P } from "@/components/common/TypoGraphy";

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* hero section  */}
      <section className="h-screen  w-full flex flex-col">
        <GetNavbar />
        <div className="flex-1 flex items-center">
          <div className=" text-center w-full lg:w-[45%] mx-auto">
            <H1 text={"Free Online Department Management App."} />
            <P text="Now you can manage your department with DeptEase. It's 100% free for a lifetime with no limitations." />
            <div className="flex items-center gap-5 mt-2 justify-center">
              <Modal
                button={<Button>{`Sign Up Now, It's free`}</Button>}
                className="p-0 w-auto"
              >
                <SignUpForm />
              </Modal>
              <Button variant={"secondary"}>Learn More</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
