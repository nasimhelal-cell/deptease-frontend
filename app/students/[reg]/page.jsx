import StudentProfile from "@/components/common/StudentProfile";
import { getStudent } from "@/lib/api/getAllStudents";
import styles from "@/public/scrollbar/scrollbar.module.css";

const StudentsPage = async ({ params }) => {
  const { reg } = params;
  const { student } = await getStudent(reg);

  return (
    <section
      className={`bg-white/60 h-full rounded-md  overflow-y-auto p-3 ${styles.scrollbar}`}
    >
      <StudentProfile student={student} />
    </section>
  );
};

export default StudentsPage;
