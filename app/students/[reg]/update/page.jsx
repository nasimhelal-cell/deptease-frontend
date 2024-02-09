import UpdateProfile from "@/components/Authentication/update-profile/UpdateProfile";
import { cookies } from "next/headers";
import React from "react";
import styles from "@/public/scrollbar/scrollbar.module.css";
import { getStudent } from "@/lib/api/getAllStudents";

const UpdateProfilePage = async () => {
  const cookieStore = cookies();
  const reg = cookieStore.get("reg").value;
  let { student } = await getStudent(reg);
  return (
    <section
      className={`bg-white/60 h-full rounded-md  overflow-y-auto p-3 ${styles.scrollbar}`}
    >
      <UpdateProfile student={student} />
    </section>
  );
};

export default UpdateProfilePage;
