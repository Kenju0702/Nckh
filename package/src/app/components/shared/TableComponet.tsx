import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

interface TableComponentProps {
  columns: GridColDef[];
  rows: any[];
}

export default function TableComponet({ columns, rows }: TableComponentProps) {
  return (<Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      filterModel={{
        items: [],
        quickFilterValues: [],
      }}
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>);
}