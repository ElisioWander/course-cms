"use client";

import { GridActionsCellItem } from "@mui/x-data-grid";
import Icon from "@/components/Icon";

type CellActionEditProps = {
  disabled?: boolean;
  title?: string;
  onClick?: (event: "edit") => void;
};

export function CellActionEdit({ onClick, ...rest }: CellActionEditProps) {
  return (
    <GridActionsCellItem
      icon={<Icon.Pencil />}
      label="Edit"
      color="primary"
      onClick={() => onClick && onClick("edit")}
      {...rest}
    />
  );
}
