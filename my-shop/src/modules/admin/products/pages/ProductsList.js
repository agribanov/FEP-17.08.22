import CategoryName from '../components/CategoryName';
import { NavLink } from 'react-router-dom';
import React from 'react';
import useProductsList from '../../../common/products/hooks/useProductsList';

function ProductsList() {
    const products = useProductsList();

    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <NavLink to={'./' + product.id}>
                            {product.title} - {product.categoryId} -
                            <CategoryName id={product.categoryId} />
                        </NavLink>
                    </li>
                ))}
            </ul>
            <NavLink to="./new">Add new</NavLink>
        </div>
    );
}

export default ProductsList;
