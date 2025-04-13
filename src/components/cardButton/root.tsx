import { ReactNode } from "react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import clsx from "clsx";

type RootProps = {
  asLink?: boolean;
  href?: Url;
  variant?: "filled" | "outlined";
  className?: string;
  children: ReactNode;
};

export function Root({
  asLink = false,
  href = "#",
  className = "",
  variant = "filled",
  children,
}: RootProps) {
  return (
    <footer
      className={clsx(
        `p-4 ${
          variant === "outlined"
            ? "bg-transparent border text-gray-900 border-gray-300 hover:bg-gray-100"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }  rounded-[12px] flex items-center gap-4 cursor-pointer transition-all duration-200`,
        className
      )}
    >
      {asLink ? (
        <Link className="flex items-center gap-4 w-full" href={href}>
          {children}
        </Link>
      ) : (
        children
      )}
    </footer>
  );
}
