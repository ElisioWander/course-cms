import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ActionsProps = {
  className?: string;
  children: ReactNode;
};

export function Actions({ children, className }: ActionsProps) {
  return <div className={cn("ml-auto flex gap-2", className)}>{children}</div>;
}
