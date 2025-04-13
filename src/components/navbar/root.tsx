import { ReactNode } from "react";

type RootProps = {
  children: ReactNode;
};

export function Root({ children }: RootProps) {
  return <nav className="hidden sm:block h-20 ">{children}</nav>;
}
