import { cloneElement, ReactElement, ReactNode } from "react";
import Link, { LinkProps } from "next/link";

type LinkButtonProps = LinkProps & {
  endIcon?: ReactElement;
  children: ReactNode;
  className?: string;
};

export function LinkButton({
  endIcon,
  children,
  className = "",
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      className={`flex items-center gap-1 text-gray-900 cursor-pointer hover:underline hover:text-gray-600 transition-colors duration-200 ${className}`}
      {...rest}
    >
      {children}
      {endIcon &&
        cloneElement(endIcon, { className: "text--red-300" } as HTMLElement)}
    </Link>
  );
}
