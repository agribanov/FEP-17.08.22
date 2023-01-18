import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import CategoriesTable from '../components/CategoriesTable';
import { Outlet } from 'react-router-dom';
import React from 'react';
import useCategories from '../../../common/categories/hooks/useCategoriesProvider';

function CategoriesList() {
    return (
        <>
            <CategoriesTable />
            <Outlet />
        </>
    );
}

export default CategoriesList;
