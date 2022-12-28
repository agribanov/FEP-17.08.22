import { Button, Paper, TextField } from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import React from 'react';
import useForm from '../../common/hooks/useForm';
import useUser from '../hooks/useUser';

const EMAIL_REGEXP =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function UserForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, saveUser } = useUser(id);
    const { values, errors, touched, isValid, onInputBlur, onInputChange } =
        useForm(user, { validate });

    function validate(values) {
        const errors = {};

        if (!values.name) {
            errors.name = 'Name is Required';
        }
        if (!values.surname) {
            errors.surname = 'Surname is Required';
        }
        if (!values.email.toLowerCase().match(EMAIL_REGEXP)) {
            errors.email = 'Email is Invalid';
        }
        if (!values.email) {
            errors.email = 'Email is Required';
        }

        return errors;
    }

    function onFormSubmit(e) {
        e.preventDefault();
        saveUser(values).then(() => navigate('..'));
    }
    // ===

    return (
        <Paper sx={{ marginTop: '20px' }}>
            <form onSubmit={onFormSubmit}>
                <TextField
                    error={touched.name && !!errors.name}
                    helperText={touched.name ? errors.name : null}
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={values.name}
                    onChange={onInputChange}
                    onBlur={onInputBlur}
                />
                <TextField
                    error={touched.surname && !!errors.surname}
                    helperText={touched.surname ? errors.surname : null}
                    name="surname"
                    label="Surname"
                    variant="outlined"
                    fullWidth
                    value={values.surname}
                    onChange={onInputChange}
                    onBlur={onInputBlur}
                />
                <TextField
                    error={touched.email && !!errors.email}
                    helperText={touched.email ? errors.email : null}
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={values.email}
                    onChange={onInputChange}
                    onBlur={onInputBlur}
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    disabled={!isValid}
                >
                    Save
                </Button>
                <Button to=".." component={NavLink}>
                    Cancel
                </Button>
            </form>
        </Paper>
    );
}

export default UserForm;
