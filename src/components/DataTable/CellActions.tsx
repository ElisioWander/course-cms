import { Children, cloneElement, isValidElement, ReactNode } from "react";
import { TableClickItemProps } from "@/interfaces";

type CellActionsProps = {
  children: ReactNode;
  onClick: (event: TableClickItemProps) => void;
};

export function CellActions(props: CellActionsProps) {
  const { children, onClick: onItemClick } = props;
  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as React.ReactElement<any>, {
            onClick: onItemClick,
          });
        }
      })}
    </>
  );
}
