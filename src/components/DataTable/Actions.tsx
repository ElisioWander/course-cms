import { ReactNode } from "react";

type ActionsProps = {
  children: ReactNode;
};

export function Actions({ children }: ActionsProps) {
  return (
    <div className="flex flex-col items-center relative overflow-hidden gap-2 ml-auto">
      {children}
    </div>
  );
}
