import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="h-screen max-w-screen">
      <div className="flex flex-col flex-1 h-full justify-center items-center bg-gradient-to-r gradient-primary">
        <BasicInfo />
      </div>
    </main>
  );
}

function BasicInfo() {
  return (
    <div className="flex flex-col gap-5 bg-white/70 p-5 backdrop-blur-lg backdrop-contrast-100 rounded w-[65%]">
      <h1 className="text-gradient">DeptEase</h1>
      <h3>A university department management system</h3>
      <p>
        DeptEase is a department management project designed to streamline and
        optimize the functions and operations within departments in an
        organization
      </p>

      <Link href={"/sign-up"} className="group">
        <span className="flex items-center gap-2 group text-blue-500">
          Get start with DeptEase
          <FaArrowRightLong className="group-hover:translate-x-[20px] group-hover:fill-blue-400 group-hover:text-black duration-300" />
        </span>
      </Link>
    </div>
  );
}
