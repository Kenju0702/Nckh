'use client'
import TableComponet from '../components/shared/TableComponet';

import { GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getProvider } from '../services/providerService';
import { LinearProgress, Box } from '@mui/material';

const columns: GridColDef[] = [
  { field: '  ', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'hello', headerName: 'Hello', type: 'number', width: 100 },
  { field: 'number', headerName: 'Category', width: 130 },
  { field: 'invoices', headerName: 'Invoices', width: 130 },
];


function Product() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProvider();
        setRows(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Box sx={{ width: '100%' }}><LinearProgress /></Box>;
  }

  return (
    <TableComponet columns={columns} rows={rows} />
  );
}

export default Product;
