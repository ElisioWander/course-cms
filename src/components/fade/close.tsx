import { cloneElement, ReactElement } from "react";
import { useFadeContext } from "./root";

type Closeprops = {
  children: ReactElement;
};

export function Close({ children }: Closeprops) {
  const { setVisible } = useFadeContext();

  return cloneElement(children, {
    onClick: () => setVisible(false),
  } as never);
}
