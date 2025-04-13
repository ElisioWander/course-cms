"use client";

import { ReactNode } from "react";
import { TableRootProvider } from "./RootProvider";

type RootProps = {
  children: ReactNode;
};

export function Root({ children }: RootProps) {
  return (
    <div className={`bg-gray-300 border border-gray-200 rounded-md h-[80%]`}>
      <TableRootProvider>{children}</TableRootProvider>
    </div>
  );
}
