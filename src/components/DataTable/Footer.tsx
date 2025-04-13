import { ReactNode } from "react";

type FooterProps = {
  children: ReactNode;
};

export function Footer({ children }: FooterProps) {
  return (
    <footer className="h-[54px] px-3 gap-3 flex items-center bg-white rounded-b-md border border-gray-200 ">
      {children}
    </footer>
  );
}
