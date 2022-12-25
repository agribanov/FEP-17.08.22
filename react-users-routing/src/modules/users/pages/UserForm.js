import { Button, Paper, TextField } from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import React from 'react';
import useUser from '../hooks/useUser';

function UserForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, changeUser, saveUser } = useUser(id);

    function onInputChange(e) {
        changeUser({
            [e.target.name]: e.target.value,
        });
    }

    function onFormSubmit(e) {
        e.preventDefault();
        saveUser(user).then(() => navigate('..'));
    }

    return (
        <Paper sx={{ marginTop: '20px' }}>
            <form onSubmit={onFormSubmit}>
                <TextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={user.name}
                    onChange={onInputChange}
                />
                <TextField
                    name="surname"
                    label="Surname"
                    variant="outlined"
                    fullWidth
                    value={user.surname}
                    onChange={onInputChange}
                />
                <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={user.email}
                    onChange={onInputChange}
                />
                <Button type="submit" color="primary" variant="contained">
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
