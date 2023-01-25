import CategoriesProvider from '../../../common/categories/providers/CategoriesProvider';
import { Outlet } from 'react-router-dom';
import ProductsProvider from '../../../common/products/providers/ProductsProvider';
import React from 'react';

function Products() {
    return (
        <CategoriesProvider>
            <ProductsProvider>
                <Outlet />
            </ProductsProvider>
        </CategoriesProvider>
    );
}

export default Products;
