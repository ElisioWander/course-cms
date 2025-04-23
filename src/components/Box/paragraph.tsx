import { ReactNode } from "react";

type ParagrapthProps = {
  children: ReactNode;
};

export function Paragrapth({ children }: ParagrapthProps) {
  return (
    <div className="flex flex-col gap-5 text-zinc-800 text-xs sm:text-sm">
      {children}
    </div>
  );
}
