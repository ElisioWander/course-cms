import { ReactNode } from "react";

type ToolbarProps = {
  children?: ReactNode;
};

export function Toolbar({ children }: ToolbarProps) {
  return (
    <div className="flex bg-white gap-3 items-center px-4 h-11 rounded-t-[8px] justify-between">
      {children}
    </div>
  );
}
