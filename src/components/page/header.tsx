import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Header({ children, className, ...rest }: HeaderProps) {
  return (
    <header
      className={cn(
        "bg-white border-b border-b-gray-200 h-auto md:h-12 flex items-center px-4 ",
        className
      )}
      {...rest}
    >
      {children}
    </header>
  );
}
