import { AppBar, Button, Toolbar, Typography } from '@mui/material';

import { NavLink } from 'react-router-dom';
import React from 'react';

function MainNavigation() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                    to="/"
                    component={NavLink}
                >
                    My Super App
                </Typography>
                <Button color="inherit" to="users" component={NavLink}>
                    Users
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default MainNavigation;
