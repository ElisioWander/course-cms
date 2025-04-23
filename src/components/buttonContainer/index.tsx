import { ReactNode } from "react";

type ButtonContainerProps = {
  children: ReactNode;
};

export function ButtonContainer({ children }: ButtonContainerProps) {
  return <div className="flex gap-2 ml-auto">{children}</div>;
}
