import Image from "next/image";
import React from "react";
import profile from "@/public/profiles/profile.webp";

const StudentProfile = ({ student }) => {
  return (
    <div className="flex h-full gap-5 *:bg-white/50 *:rounded-md *:px-3 *:py-2">
      <div className="w-1/4 ">
        <Image
          src={student.personal?.img || profile}
          alt="logo"
          className="rounded- aspect-square w-full rounded border border-gray-400"
        />
        <div className="mt-5">
          <p className="text-xl text-[#000] mb-5">About Student</p>

          <Flex label="Name">
            <span className="capitalize">{student.personal?.fullName}</span>
          </Flex>

          <Flex label="Department">
            <span className="capitalize">{student.dept?.name}</span>
          </Flex>

          <Flex label="Email">
            <span className="">{student.contact?.email}</span>
          </Flex>

          <Flex label="Phone">
            <span className="capitalize">{student.contact?.phone}</span>
          </Flex>

          <Flex label="Address">
            <span className="capitalize">{student.address?.district}</span>
          </Flex>
        </div>
      </div>
      <div className="flex-1 w-full flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-medium border-b border-violet-500 pb-1 w-full">
            Biography
          </p>

          <p>
            {student.personal?.bio ||
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sint nihil, molestiae dolore et alias perferendis nemo, veritatis labore quos iste quaerat. Voluptas accusamus expedita beatae eveniet, laudantium obcaecati ullam.`}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-lg font-medium border-b border-violet-500 pb-1 w-full">
            Education
          </p>

          <p>
            {student.personal?.bio ||
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sint nihil, molestiae dolore et alias perferendis nemo, veritatis labore quos iste quaerat. Voluptas accusamus expedita beatae eveniet, laudantium obcaecati ullam.`}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-medium border-b border-violet-500 pb-1 w-full">
            Address
          </p>

          <p>
            {student.personal?.bio ||
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sint nihil, molestiae dolore et alias perferendis nemo, veritatis labore quos iste quaerat. Voluptas accusamus expedita beatae eveniet, laudantium obcaecati ullam.`}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-medium border-b border-violet-500 pb-1 w-full">
            Contact
          </p>

          <p>
            {student.personal?.bio ||
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sint nihil, molestiae dolore et alias perferendis nemo, veritatis labore quos iste quaerat. Voluptas accusamus expedita beatae eveniet, laudantium obcaecati ullam.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;

const Flex = ({ children, label }) => {
  return (
    <div className="flex flex-col pb-1">
      <b>{label}</b>
      {children}
    </div>
  );
};
