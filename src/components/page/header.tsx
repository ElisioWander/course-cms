import { HTMLAttributes, ReactNode } from "react";

type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Header({ children, className, ...rest }: HeaderProps) {
  return (
    <header
      className={`bg-white border-b border-b-gray-200 h-auto md:h-12 flex items-center py-3 md:py-4 px-4 md:px-5 ${className}`}
      {...rest}
    >
      {children}
    </header>
  );
}
