"use client";

import { useMemo } from "react";

import {
  MenuItem,
  TextField,
  Pagination as MuiPagination,
} from "@mui/material";

type MioPaginationProps = {
  page: number;
  pageSize: number;
  totalRecords: number;
  lastPage: number;
};

type PaginationProps = {
  pagination?: MioPaginationProps;
  rowsPerPageOptions?: number[];
  onChangePage?: (currentPage: number) => void;
  onChangePageSize?: (numberOfRows: number) => void;
};

export function Pagination(props: PaginationProps) {
  const {
    onChangePage,
    onChangePageSize,
    pagination,
    rowsPerPageOptions = [10, 20, 50, 100],
  } = props;
  const { page, pageSize = 100, totalRecords } = pagination || {};

  const pages = useMemo(() => {
    if (pagination?.lastPage) return pagination.lastPage;

    if ((totalRecords || 0) < pageSize) return 1;
    return Math.max(Math.ceil((totalRecords || 0) / pageSize));
  }, [totalRecords, pageSize]);

  const totalRecordsLabel = useMemo(() => {
    if ((totalRecords || 0) < pageSize)
      // return `Exibindo ${pluralizar(
      //   totalRecords || 0,
      //   'registro',
      //   'registros',
      //   true,
      // )}`
      return `Exibindo registro`;

    let registrosExibidos = pageSize;
    if (page === pages) {
      const ultimaPaginaRegistros = (totalRecords || 0) % pageSize;
      registrosExibidos =
        ultimaPaginaRegistros === 0 ? pageSize : ultimaPaginaRegistros;
    }

    // return `Exibindo ${pluralizar(
    //   registrosExibidos || 0,
    //   'registro',
    //   'registros',
    //   true,
    // )} de ${totalRecords}`

    return `Exibindo regisros de ${totalRecords}`;
  }, [pagination, pages]);

  // const showPagination = Boolean((totalRecords || 0) > pageSize)
  const showPagination = true;

  return (
    <div className="flex w-full items-center gap-4 ml-auto">
      <p className="text-sm font-semibold whitespace-nowrap">
        {totalRecordsLabel}
      </p>

      {showPagination && (
        <div className="flex items-center gap-4 ml-auto">
          <TextField
            sx={{
              width: "78px",
              fontSize: "8pt",
            }}
            size="small"
            value={pageSize || 0}
            select
            onChange={(e) => {
              if (onChangePageSize) {
                onChangePageSize(parseInt(e.target.value));
              }
            }}
          >
            {rowsPerPageOptions.map((option: number) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <MuiPagination
            showLastButton
            showFirstButton
            color="primary"
            shape="rounded"
            variant="outlined"
            count={pages || 0}
            page={page || 0}
            onChange={(_, _page) => {
              if (onChangePage) {
                onChangePage(_page);
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
