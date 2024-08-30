'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/components/container/PageContainer';
// components
import SalesOverview from '@/app/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/components/dashboard/ProductPerformance';
import Blog from '@/app/components/dashboard/Blog';
import MonthlyEarnings from '@/app/components/dashboard/MonthlyEarnings';
import TableComponent from'../components/shared/TableComponet';

function Product() {
  return (
    <TableComponent />
  );
}

export default Product;
