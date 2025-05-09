import { cloneElement, ReactElement } from "react";
import { useFadeContext } from "./root";

type TriggerProps = {
  children: ReactElement;
};

export function Trigger({ children }: TriggerProps) {
  const { setVisible } = useFadeContext();

  return cloneElement(children, {
    onClick: () => setVisible(true),
  } as never);
}
