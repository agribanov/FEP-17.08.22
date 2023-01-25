import { Button, MenuItem } from '@mui/material';
import { Form, Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

import MySelect from '../../../common/form/MySelect';
import MyTextField from '../../../common/form/MyTextField';
import React from 'react';
import useCategoriesList from '../../../common/categories/hooks/useCategoriesList';
import useProduct from '../../../common/products/hooks/useProduct';
import useProducts from '../../../common/products/hooks/useProducts';

function ProductForm() {
    const { createProduct, updateProduct } = useProducts();
    const categories = useCategoriesList();
    const { id } = useParams();
    const navigate = useNavigate();
    const product = useProduct(+id);

    function onSubmit(values) {
        save(values).then(() => {
            navigate('../');
        });
    }

    function save(product) {
        if (product.id) {
            return updateProduct(product);
        } else {
            return createProduct(product);
        }
    }

    return (
        <Formik initialValues={product} enableReinitialize onSubmit={onSubmit}>
            <Form>
                <MyTextField
                    autoFocus
                    margin="dense"
                    name="title"
                    label="Product Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <MyTextField
                    autoFocus
                    margin="dense"
                    name="price"
                    label="Price"
                    type="number"
                    fullWidth
                    variant="standard"
                />
                <MyTextField
                    autoFocus
                    margin="dense"
                    name="description"
                    label="Description"
                    type="textarea"
                    fullWidth
                    variant="standard"
                />
                <MySelect name="categoryId">
                    {categories.map((item) => (
                        <MenuItem key="value.id" value={item.id}>
                            {item.title}
                        </MenuItem>
                    ))}
                </MySelect>
                <Button type="submit">Save</Button>
                {/* <MyTextField
                            autoFocus
                            margin="dense"
                            name="title"
                            label="Category Name"
                            type="text"
                            fullWidth
                            variant="standard"
                        /> */}
            </Form>
        </Formik>
    );
}

export default ProductForm;
