import {
    Avatar,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';

import { AuthContext } from '../providers/AuthProvider';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MySelect from '../../form/MySelect';
import MySubmitButton from '../../form/MySubmitButton';
import MyTextField from '../../form/MyTextField';
import { Navigate } from 'react-router-dom';
import loginValidationSchema from '../validation/loginValidationSchema';
import useAuth from '../hooks/useAuth';

const initialValues = { username: '', password: '', role: 'admin' };

function Login() {
    const auth = useAuth();

    function onSubmit(values) {
        console.log('submiting', values);
        auth.login(values.username, values.password, values.role);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={loginValidationSchema}
        >
            <Form>
                {auth.isAuthorized && <Navigate replace={true} to="/" />}
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <MyTextField
                            margin="normal"
                            fullWidth
                            label="Username"
                            name="username"
                            autoFocus
                        />
                        <MyTextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                        />
                        <MySelect name="role" fullWidth label="Role" id="role">
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="user">User</MenuItem>
                        </MySelect>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Form>
        </Formik>
        // <Formik
        //     initialValues={initialValues}
        //     onSubmit={onSubmit}
        //     validationSchema={loginValidationSchema}
        // >
        //     {(props) =>
        //         console.log(props) || (
        //             <Form>
        //                 {auth.isAuthorized && <Navigate to="/" />}
        //                 {JSON.stringify(auth.user)}
        //                 <Field name="username" placeholder="Name" />
        //                 <br />
        //                 <Field name="password" placeholder="Password" />
        //                 <br />
        //                 <Field name="role" placeholder="Role" />
        //                 <br />
        //                 <button type="submit">Login</button>
        //             </Form>
        //         )
        //     }
        // </Formik>
    );
}

export default Login;
