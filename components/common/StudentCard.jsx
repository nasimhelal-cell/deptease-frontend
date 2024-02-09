import Image from "next/image";
import React from "react";
import profile from "@/public/profiles/profile.webp";
import Link from "next/link";

const StudentCard = ({ student }) => {
  return (
    <div className="p-4 bg-white flex-1 rounded-md">
      <div className="flex gap-10">
        <div className="flex items-center justify-center">
          <Image
            src={student.personal.img || profile}
            alt={student.personal.fullName}
            className="w-[70px] aspect-square border p-2 rounded"
          />
        </div>

        <div className="flex flex-col ">
          <h4 className="capitalize">{student.personal.fullName}</h4>
          <span>Dept : {student.varsity.dept.name}</span>
          <div className="flex items-center gap-5">
            <span>Session : {student.varsity.dept.session}</span>
            <span>Roll : {student.varsity.dept.roll}</span>
          </div>
          <Link
            href={`/students/${student.reg}`}
            className="text-xs text-blue-400 mt-2"
          >
            Go to Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
