import CV from "@/components/common/CV";
import PrintButton from "@/components/input/PrintButton";
import styles from "@/public/scrollbar/scrollbar.module.css";

const CVPage = async () => {
  return (
    <section
      className={`bg-white/60 h-full rounded-md relative overflow-y-auto p-3 ${styles.scrollbar}`}
    >
      <PrintButton />
      <CV />
    </section>
  );
};

export default CVPage;
