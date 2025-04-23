import { ReactNode } from "react";
import clsx from "clsx";

type HeaderProps = {
  className?: string;
  children: ReactNode;
};

export function Header({ children, className }: HeaderProps) {
  return (
    <div
      className={clsx(
        "flex flex-col p-3 md:px-8 md:py-3 items-start self-stretch border-b border-gray-200 bg-gray-100 ",
        className
      )}
    >
      {children}
    </div>
  );
}
