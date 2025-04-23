import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useFadeContext } from "./root";

type VisibleProps = {
  children: ReactNode;
};

export function Visible({ children }: VisibleProps) {
  const { visible } = useFadeContext();

  return (
    <div
      className={cn(
        "flex flex-col gap-4 transition-all duration-300",
        visible
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 h-0 scale-95 pointer-events-none"
      )}
    >
      {children}
    </div>
  );
}
