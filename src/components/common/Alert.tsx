import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface PropsTypes {
  button: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Alert: React.FC<PropsTypes> = ({ children, button, className }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{button}</AlertDialogTrigger>
      <AlertDialogContent className={className}>{children}</AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
