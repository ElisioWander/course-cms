import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useFadeContext } from "./root";

type InvisibleProps = {
  children: ReactNode;
};

export function Invisible({ children }: InvisibleProps) {
  const { visible } = useFadeContext();

  return (
    <div
      className={cn(
        visible ? "opacity-0 pointer-events-none h-0" : "opacity-100"
      )}
    >
      {children}
    </div>
  );
}
