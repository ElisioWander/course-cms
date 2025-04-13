import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

export function Content({ children }: ContentProps) {
  return <div className="p-4 overflow-auto w-full h-full ">{children}</div>;
}
