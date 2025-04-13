"use client";

import {
  GridActionsCellItem,
  GridActionsCellItemProps,
} from "@mui/x-data-grid";

type CellActionProps = {
  event?: string;
  onClick?: (event?: string) => void;
} & GridActionsCellItemProps;

export function CellAction({ event, onClick, ...rest }: CellActionProps) {
  return (
    <GridActionsCellItem
      color="primary"
      onClick={() => {
        if (onClick) onClick(event);
      }}
      {...rest}
    />
  );
}
