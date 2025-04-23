import { ReactNode } from "react";

type RootProps = {
  children: ReactNode;
};

export function Root({ children }: RootProps) {
  return (
    <div className="flex flex-col self-stretch rounded-md border border-gray-200 overflow-hidden">
      {children}
    </div>
  );
}
