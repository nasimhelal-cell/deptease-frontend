import { IoMdSettings } from "react-icons/io";
import { LiaUniversitySolid } from "react-icons/lia";
import { MdSubject } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdPresentToAll } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { PiExam } from "react-icons/pi";

export interface SidebarItem {
  title: string;
  href: string;
}

export interface SidebarSection {
  label: string;
  icon: any;
  items: SidebarItem[];
}

export const SidebarItems: SidebarSection[] = [
  {
    label: "general settings",
    icon: IoMdSettings,
    items: [
      {
        title: "department profile",
        href: "dept-profile",
      },
      {
        title: "fee particular",
        href: "fees",
      },
    ],
  },
  {
    label: "classes",
    icon: LiaUniversitySolid,
    items: [
      {
        title: "all classes",
        href: "all-classes",
      },
      {
        title: "add new class",
        href: "add-new-class",
      },
    ],
  },
  {
    label: "courses",
    icon: MdSubject,
    items: [
      {
        title: "all courses",
        href: "all-courses",
      },
      {
        title: "add new courses",
        href: "add-new-course",
      },
    ],
  },
  {
    label: "students",
    icon: PiStudentFill,
    items: [
      {
        title: "all students",
        href: "students",
      },
      {
        title: "add new student",
        href: "add-new-student",
      },
    ],
  },
  {
    label: "teachers",
    icon: LiaChalkboardTeacherSolid,
    items: [
      {
        title: "all teachers",
        href: "all-teachers",
      },
      {
        title: "add new teacher",
        href: "add-new-teacher",
      },
    ],
  },
  {
    label: "staffs",
    icon: FaPeopleGroup,
    items: [
      {
        title: "all staffs",
        href: "all-staffs",
      },
      {
        title: "add new staff",
        href: "add-new-staff",
      },
    ],
  },
  {
    label: "attendance",
    icon: MdPresentToAll,
    items: [
      {
        title: "students attendance",
        href: "student-attendance",
      },
      {
        title: "teachers attendance",
        href: "teachers-attendance",
      },
      {
        title: "staffs attendance",
        href: "staffs-attendance",
      },
      {
        title: "students attendance report",
        href: "student-attendance-report",
      },
      {
        title: "teachers attendance report",
        href: "teachers-attendance-report",
      },
      {
        title: "staffs attendance report",
        href: "staffs-attendance-report",
      },
    ],
  },
  {
    label: "forms",
    icon: FaWpforms,
    items: [
      {
        title: "all forms",
        href: "all-forms",
      },
      {
        title: "add new form",
        href: "add-new-form",
      },
    ],
  },
  {
    label: "exams",
    icon: PiExam,
    items: [
      {
        title: "all exams",
        href: "all-exams",
      },
      {
        title: "add new exam",
        href: "add-new-exam",
      },
    ],
  },
];
