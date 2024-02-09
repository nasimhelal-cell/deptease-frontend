import StudentCard from "@/components/common/StudentCard";
import { getAllStudents } from "@/lib/api/getAllStudents";
import { nanoid } from "nanoid";
import React from "react";

const AllStudentsPage = async () => {
  const students = await getAllStudents();

  return (
    <section className=" flex flex-col gap-2 h-full rounded-md ">
      <div className="h-[80px] bg-white/60 rounded-md"></div>
      <div className="flex-1 bg-white/60 rounded-md overflow-hidden ">
        <div className="flex gap-5 p-5">
          {students?.map((student) => (
            <StudentCard key={nanoid()} student={student} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllStudentsPage;
