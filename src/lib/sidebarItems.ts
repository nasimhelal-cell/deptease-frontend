import { CiSettings } from "react-icons/ci";

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
    icon: CiSettings,
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
    icon: CiSettings,
    items: [
      {
        title: "all classes",
        href: "all-classes",
      },
      {
        title: "new class",
        href: "new-class",
      },
    ],
  },
  {
    label: "courses",
    icon: CiSettings,
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
    icon: CiSettings,
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
    label: "employees",
    icon: CiSettings,
    items: [
      {
        title: "all employees",
        href: "all-employees",
      },
      {
        title: "add new employee",
        href: "add-new-employee",
      },
    ],
  },
  {
    label: "staffs",
    icon: CiSettings,
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
    icon: CiSettings,
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
];
