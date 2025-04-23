import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Content({ children, className }: ContentProps) {
  return (
    <div
      className={clsx(
        "flex flex-col p-3 sm:p-8 sm:pt-3 self-stretch",
        className
      )}
    >
      {children}
    </div>
  );
}
