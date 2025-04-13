import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

export function Content({ children }: ContentProps) {
  return (
    <main className="w-full px-6 h-full m-auto flex items-center justify-between">
      {children}
    </main>
  );
}
