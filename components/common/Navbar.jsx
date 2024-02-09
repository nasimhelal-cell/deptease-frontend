import profile from "@/public/profiles/profile.webp";
import Image from "next/image";
import Link from "next/link";
import LogoutBtn from "../input/logoutBtn";
import { cookies } from "next/headers";
import { getStudent } from "@/lib/api/getAllStudents";

const Navbar = async () => {
  const cookieStore = cookies();
  const reg = cookieStore.get("reg").value;
  let { student } = await getStudent(reg);
  return (
    <aside className="w-1/5 h-full bg-white flex justify-center print:hidden">
      <div className="flex flex-col h-[calc(100%-40px)] items-center gap-3 mt-10 w-full">
        <Image
          src={student.personal?.img || profile}
          alt="logo"
          width={100}
          height={100}
          className="rounded-full aspect-square w-[100px] border-[6px] border-gray-400"
        />
        <h2 className="capitalize">
          {student.personal?.fullName || "your full name"}
        </h2>
        <span className="text-center first-letter:capitalize text-base">
          {student.personal?.bio || "bio"}
        </span>
        <div className="self-start w-full px-5 flex flex-col gap-3 *:py-3 *:bg-gradient-to-r *:gradient-primary *:text-white *:px-5 *:rounded-md *:cursor-pointer capitalize text-lg">
          <Link href={`/students/${reg}`}>profile</Link>

          <Link href={`/students`}>All Students</Link>

          {/* <Link href={"/form"}>form</Link> */}

          <Link href={`/students/${reg}/cv`}>C V</Link>
        </div>

        <div className="flex justify-between gap-3 w-full mt-auto px-3 mb-5">
          <Link
            href={`/students/${reg}/update`}
            className="bg-green-400 text-green-50 py-3 px-3 text-base flex items-center  rounded-md capitalize"
          >
            update profile
          </Link>
          <LogoutBtn />
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
