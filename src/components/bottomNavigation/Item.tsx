"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cloneElement, ReactElement } from "react";

type ItemProps = LinkProps & {
  label: string;
  icon: ReactElement;
};

export default function Item({ label, icon, href }: ItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <li
        className={`text-xs cursor-pointer hover:bg-zinc-100  transition-all 
    duration-200 flex flex-col items-center justify-center rounded-full gap-1 py-1 ${
      isActive ? "text-green-400" : "text-zinc-700"
    }`}
      >
        {cloneElement(icon, {
          className: `${isActive ? "text-green-400" : "text-zinc-700"}`,
        } as never)}
        {label}
      </li>
    </Link>
  );
}
