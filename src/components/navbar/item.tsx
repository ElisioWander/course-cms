"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type ItemProps = LinkProps & {
  label: string;
};

export function Item({ label, href, ...rest }: ItemProps) {
  const pathname = usePathname();
  return (
    <Link href={href} {...rest}>
      <li
        className={`h-20 cursor-pointer inline-block leading-[80px] ml-7 relative 
      hover:text-gray-900 text-sm lg:text-[1rem] transition-all duration-200
      ${
        pathname === href
          ? "font-semibold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-gray-900 after:bottom-0 after:left-0 after:rounded-t-sm"
          : "text-gray-700"
      }
      `}
      >
        {label}
      </li>
    </Link>
  );
}
