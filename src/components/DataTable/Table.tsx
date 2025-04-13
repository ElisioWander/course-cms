"use client";

import { useEffect, useMemo } from "react";

import {
  CssBaseline,
  LinearProgress,
  Paper,
  Stack,
  StackProps,
  ThemeProvider,
} from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import {
  DataGrid,
  DataGridProps,
  GridCallbackDetails,
  GridColDef as MuiGridColDef,
  GridRowSelectionModel,
  GridRowsProp,
  MuiEvent,
  GridEventLookup,
  GridRowParams,
  GridCsvExportOptions,
  GridCsvGetRowsToExportParams,
  gridFilteredSortedRowIdsSelector,
} from "@mui/x-data-grid";

import { useTableRootContext } from "./RootProvider";
import { EmptyData } from "./EmptyData";
import { Error } from "./Error";
import { muiTheme } from "@/app/muiTheme";

export type GridColDef = MuiGridColDef & {
  enableStickyColumns?: boolean;
};

type TableProps<T> = Omit<
  DataGridProps,
  "onCellKeyDown" | "onRowDoubleClick"
> & {
  data?: GridRowsProp<{
    [key: string | symbol]: unknown;
  }>;
  columns: GridColDef[];
  error?: string;
  isLoading?: boolean;
  isFetching?: boolean;
  stackProps?: StackProps;
  controlledRowsSelectedId?: GridRowSelectionModel;
  onCellKeyDown?: (
    event: "edit" | "delete",
    rowData: T,
    params: GridEventLookup["cellKeyDown"]["params"],
    details: GridCallbackDetails
  ) => void;
  onRowDoubleClick?: (
    event: "edit" | "delete",
    rowData: T,
    params: GridRowParams,
    details: GridCallbackDetails
  ) => void;
  onClearRowsSelectedId?: (rowsSelectedId: GridRowSelectionModel) => void;
  onRowSelectionChange?: (
    rowSelectionModel: GridRowSelectionModel,
    details: GridCallbackDetails
  ) => void;
};

const getFilteredRows = ({ apiRef }: GridCsvGetRowsToExportParams) =>
  gridFilteredSortedRowIdsSelector(apiRef);

export function Table<T>(props: TableProps<T>) {
  const {
    error,
    isLoading,
    isFetching,
    data,
    columns,
    controlledRowsSelectedId,
    onClearRowsSelectedId,
    onRowSelectionChange,
    onCellKeyDown,
    onRowDoubleClick,
    stackProps,
    ...rest
  } = props;

  const {
    rowsSelectedId,
    setRowsSelectedId,
    clearCallback,
    setClearCallback,
    apiRef,
  } = useTableRootContext();

  const parsedColumns = useMemo(() => {
    return (columns: GridColDef[]) => {
      return columns.map((col) => {
        if (col.headerName === "Ações") {
          return {
            ...col,
            minWidth: col.minWidth || 80,
            maxWidth: col.maxWidth || col.width || 80,
            headerClassName: "sticky-header",
            cellClassName: "sticky-cell",
          };
        }

        return {
          ...col,
          flex: col.width ? 0 : col.flex || 1,
          minWidth: col.minWidth || 100,
          headerClassName: col?.enableStickyColumns ? "sticky-header" : "",
          cellClassName: col?.enableStickyColumns ? "sticky-cell" : "",
        };
      });
    };
  }, []);

  useEffect(() => {
    if (controlledRowsSelectedId) {
      setRowsSelectedId(controlledRowsSelectedId);
    }
  }, [controlledRowsSelectedId, setRowsSelectedId]);

  useEffect(() => {
    if (clearCallback) {
      if (onClearRowsSelectedId) {
        onClearRowsSelectedId([]);
      }
      setClearCallback(false);
    }
  }, [clearCallback, onClearRowsSelectedId, setClearCallback]);

  function handleCellKeyDown(
    params: GridEventLookup["cellKeyDown"]["params"],
    event: MuiEvent<GridEventLookup["cellKeyDown"]["event"]>,
    details: GridCallbackDetails
  ) {
    let eventCode = "";
    eventCode = event.ctrlKey && event.code === "KeyE" ? "ctrl+e" : event.code;
    switch (eventCode) {
      case "Enter":
        if (onCellKeyDown) onCellKeyDown("edit", params.row, params, details);
        break;
      case "F3":
        event.preventDefault();
        if (onCellKeyDown) onCellKeyDown("edit", params.row, params, details);
        break;
      case "Delete":
        if (onCellKeyDown) onCellKeyDown("delete", params.row, params, details);
        break;
      case "ctrl+e": {
        event.preventDefault();
        const handleExport = (options: GridCsvExportOptions) => {
          if (apiRef?.current) {
            apiRef.current.exportDataAsCsv(options);
          }
        };

        handleExport({ getRowsToExport: getFilteredRows });
        break;
      }
      default:
        break;
    }
  }

  function handleRowDoubleClick(
    params: GridRowParams,
    _: React.MouseEvent,
    details: GridCallbackDetails
  ) {
    if (onRowDoubleClick) onRowDoubleClick("edit", params.row, params, details);
  }

  return (
    <Stack
      component={Paper}
      elevation={0}
      height="100%"
      // minHeight="500px"
      position="relative"
      {...stackProps}
    >
      {!isLoading && isFetching && (
        <LinearProgress
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            zIndex: 999,
            height: "3px",
          }}
        />
      )}

      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <DataGrid
          apiRef={apiRef}
          rows={data}
          columns={parsedColumns(columns)}
          density="compact"
          hideFooterPagination
          hideFooter
          loading={isLoading}
          // rowHeight={43}
          // columnHeaderHeight={43}
          disableVirtualization
          onRowDoubleClick={handleRowDoubleClick}
          onCellKeyDown={handleCellKeyDown}
          disableRowSelectionOnClick
          rowSelectionModel={rowsSelectedId}
          onRowSelectionModelChange={(rowSelectionModel, details) => {
            if (onRowSelectionChange) {
              onRowSelectionChange(rowSelectionModel, details);
            }

            if (controlledRowsSelectedId) return;
            setRowsSelectedId(rowSelectionModel);
          }}
          slots={{
            noRowsOverlay: () =>
              !isLoading && !!error ? (
                <Error errorMessage={error} />
              ) : (
                <EmptyData />
              ),
          }}
          slotProps={{
            loadingOverlay: {
              variant: "skeleton",
              noRowsVariant: "skeleton",
            },
          }}
          disableColumnFilter
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          sx={{
            border: "none",
            borderRadius: 0,
            "--DataGrid-rowBorderColor": "#edf2f9",
            "--DataGrid-containerBackground": "#f4f6fa",
            ".MuiDataGrid-overlayWrapperInner": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            ".MuiDataGrid-row": {
              backgroundColor: "white",
              "&:nth-of-type(even)": {
                backgroundColor: "#f9fafd",
              },
              ":hover": {
                backgroundColor: "#e9e9e9",
              },
              "&.Mui-selected": {
                backgroundColor: "rgb(238, 249, 252)",
                "&:hover": {
                  backgroundColor: "rgb(222, 243, 249)",
                },
              },
            },
            ".MuiDataGrid-cell": {
              fontSize: "12px",
              color: "#0b0e14",
            },
            // ".MuiDataGrid-columnHeaders": {
            //   border: "solid 2px transparent",
            //   borderRadius: "1rem",
            // },
            ".MuiDataGrid-columnHeaderTitle": {
              fontSize: "12px",
              color: "#0b0e14",
              fontWeight: "600",
            },
            "& .sticky-cell": {
              position: "sticky",
              right: 0,
              background: "inherit",
              zIndex: 1,
            },
            "& .sticky-header": {
              position: "sticky",
              right: 0,
              background: "inherit",
              zIndex: 2,
            },
          }}
          {...rest}
        />
      </ThemeProvider>
    </Stack>
  );
}
