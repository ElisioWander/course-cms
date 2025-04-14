"use client";

import { DataTable, GridColDef } from "@/components/DataTable";
import { TableClickItemProps } from "@/interfaces";

const data = [
  { id: 1, name: "Curso A", description: "Descrição do curso A" },
  { id: 2, name: "Curso B", description: "Descrição do curso B" },
  { id: 3, name: "Curso C", description: "Descrição do curso C" },
  { id: 4, name: "Curso D", description: "Descrição do curso D" },
  { id: 5, name: "Curso E", description: "Descrição do curso E" },
  { id: 6, name: "Curso F", description: "Descrição do curso F" },
  { id: 7, name: "Curso G", description: "Descrição do curso G" },
  { id: 8, name: "Curso H", description: "Descrição do curso H" },
  { id: 9, name: "Curso I", description: "Descrição do curso I" },
  { id: 11, name: "Curso A", description: "Descrição do curso A" },
  { id: 12, name: "Curso B", description: "Descrição do curso B" },
  { id: 13, name: "Curso C", description: "Descrição do curso C" },
  { id: 14, name: "Curso D", description: "Descrição do curso D" },
  { id: 15, name: "Curso E", description: "Descrição do curso E" },
  { id: 16, name: "Curso F", description: "Descrição do curso F" },
  { id: 17, name: "Curso G", description: "Descrição do curso G" },
  { id: 18, name: "Curso H", description: "Descrição do curso H" },
  { id: 19, name: "Curso I", description: "Descrição do curso I" },
  { id: 20, name: "Curso I", description: "Descrição do curso I" },
];

export function Table() {
  function handleClickItem(event: TableClickItemProps, rowData: unknown) {
    console.log(event);
    console.log(rowData);
  }

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nome",
    },
    {
      field: "description",
      headerName: "Descrição",
    },
    {
      width: 100,
      field: "id",
      type: "actions",
      headerName: "Ações",
      getActions: ({ row }) => [
        <DataTable.CellActions
          key={row?.id}
          onClick={(event) => handleClickItem(event, row)}
        >
          <DataTable.CellActionEdit />
          <DataTable.CellActionDelete />
        </DataTable.CellActions>,
      ],
    },
  ];

  return (
    <DataTable.Root>
      <DataTable.Table
        data={data}
        columns={columns}
        // error={error?.message}
        onRowDoubleClick={handleClickItem}
        onCellKeyDown={handleClickItem}
      />

      <DataTable.Footer>
        <DataTable.Pagination
        // pagination={data?.pagination}
        // onChangePage={changePage}
        // onChangePageSize={changePageSize}
        />
      </DataTable.Footer>
    </DataTable.Root>
  );
}
