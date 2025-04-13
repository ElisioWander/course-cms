"use client";

import {
  createContext,
  MutableRefObject,
  ReactNode,
  useContext,
  useState,
} from "react";

import { GridRowSelectionModel, useGridApiRef } from "@mui/x-data-grid";
import { GridApiCommunity } from "@mui/x-data-grid/internals";

type TableRootContextData = {
  apiRef: MutableRefObject<GridApiCommunity>;
  rowsSelectedId: GridRowSelectionModel;
  clearCallback: boolean;
  breakpoint: boolean;
  setBreakpoint: (breakpoint: boolean) => void;
  setRowsSelectedId: (rowsSelectedId: GridRowSelectionModel) => void;
  clearRowsSelectedId: () => void;
  setClearCallback: (clearCallback: boolean) => void;
};

export const TableRootContext = createContext({} as TableRootContextData);

type TableRootProviderProps = {
  children: ReactNode;
};

export function TableRootProvider({ children }: TableRootProviderProps) {
  const [ids, setIds] = useState<GridRowSelectionModel>([]);
  const [clearCallback, setClearCallback] = useState(false);
  const [breakpoint, setBreakpoint] = useState(false);

  const apiRef = useGridApiRef();

  function handleClearRowsSelectedId() {
    setIds([]);
    setClearCallback(true);
  }

  return (
    <TableRootContext.Provider
      value={{
        apiRef,
        rowsSelectedId: ids,
        clearCallback,
        breakpoint,
        setClearCallback,
        setBreakpoint,
        setRowsSelectedId: setIds,
        clearRowsSelectedId: handleClearRowsSelectedId,
      }}
    >
      {children}
    </TableRootContext.Provider>
  );
}

export function useTableRootContext() {
  return useContext<TableRootContextData>(TableRootContext);
}
