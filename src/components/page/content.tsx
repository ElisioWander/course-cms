import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContentProps = {
  className?: string;
  children: ReactNode;
};

export function Content({ className, children }: ContentProps) {
  return (
    <div className={cn("p-4 overflow-auto w-full h-full ", className)}>
      {children}
    </div>
  );
}
