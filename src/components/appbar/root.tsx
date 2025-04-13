import { ReactNode } from "react";

type RootProps = {
  children: ReactNode;
};

export function Root({ children }: RootProps) {
  return (
    <div className="h-20 flex items-center bg-white border-b border-gray-200">
      {children}
    </div>
  );
}
