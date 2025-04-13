"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface RootProps {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  const pathName = usePathname();
  return (
    <nav
      className={`${
        pathName === "/course" && "hidden"
      } sm:hidden m-auto w-full h-16 max-w-lg mb-4 px-5 rounded-full`}
    >
      <div className="shadow-md border-t border-gray-200 shadow-gray-200 bg-white rounded-full p-1.5  ">
        <ul className="grid h-full max-w-lg grid-cols-4 gap-1 mx-auto">
          {children}
        </ul>
      </div>
    </nav>
  );
}
