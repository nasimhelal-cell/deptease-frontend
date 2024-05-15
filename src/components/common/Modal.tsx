import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React from "react";

interface PropsTypes {
  title?: string;
  description?: string;
  button: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<PropsTypes> = ({
  title,
  description,
  className,
  button,
  children,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className={cn("sm:max-w-[425px]", className)}>
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}

        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
