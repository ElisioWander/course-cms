"use client";

import { GridActionsCellItem } from "@mui/x-data-grid";
import Icon from "@/components/Icon";

type CellActionDeleteProps = {
  onClick?: (event: "delete") => void;
  disabled?: boolean;
  title?: string;
};

export function CellActionDelete({ onClick, ...rest }: CellActionDeleteProps) {
  return (
    <GridActionsCellItem
      icon={<Icon.Trash className="w-4" />}
      label="Delete"
      color="primary"
      onClick={() => {
        if (onClick) onClick("delete");
      }}
      {...rest}
    />
  );
}
