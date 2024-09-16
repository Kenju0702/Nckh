import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

interface TableComponentProps {
  columns: GridColDef[];
  rows: any[];
}

export default function TableComponent({ columns, rows }: TableComponentProps) {
  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);

  const handleAddButtonClick = () => {
    console.log('Add button clicked');
    // Implement "Add" action here
  };

  const handleDeleteButtonClick = () => {
    if (selectedRows.length > 0) {
      console.log('Delete button clicked for rows:', selectedRows);
      // Implement "Delete" action here
      setSelectedRows([]); // Reset selected rows after deletion
    }
  };

  const handleSelectionModelChange = (newSelectionModel: any) => {
    setSelectedRows(newSelectionModel);
  };

  return (
    <Box sx={{ margin: 'auto', height: 500, width: '100%' }}>
      {selectedRows.length === 0 ? (
        <IconButton
          color="success"
          onClick={handleAddButtonClick}
          sx={{ marginBottom: 2, marginLeft: 'auto', display: 'flex' }}
        >
          <AddIcon />
        </IconButton>
      ) : (
        <IconButton
          color="error"
          onClick={handleDeleteButtonClick}
          sx={{ marginBottom: 2, marginLeft: 'auto', display: 'flex' }}
        >
          <DeleteIcon />
        </IconButton>
      )}

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
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        onRowSelectionModelChange={handleSelectionModelChange}
        rowSelectionModel={selectedRows}
      />
      
    </Box>
  );
}
