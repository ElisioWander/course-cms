import { cloneElement, ReactElement } from "react";
import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  icon: ReactElement;
};

export function Icon({ icon, className }: IconProps) {
  return (
    <div className="bg-green-100 p-1 rounded-full">
      {cloneElement(icon, {
        className: cn("text-green-600 w-5", className),
      } as HTMLElement)}
    </div>
  );
}
