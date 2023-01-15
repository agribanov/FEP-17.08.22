import { Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';

import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import loginValidationSchema from '../validation/loginValidationSchema';
import useAuth from '../hooks/useAuth';

const initialValues = { username: '', password: '', role: 'admin' };

function Login() {
    const auth = useAuth();

    function onSubmit(values) {
        auth.login(values.username, values.password, values.role);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={loginValidationSchema}
        >
            {(props) =>
                console.log(props) || (
                    <Form>
                        {auth.isAuthorized && <Navigate to="/" />}
                        {JSON.stringify(auth.user)}
                        <Field name="username" placeholder="Name" />
                        <br />
                        <Field name="password" placeholder="Password" />
                        <br />
                        <Field name="role" placeholder="Role" />
                        <br />
                        <button type="submit">Login</button>
                    </Form>
                )
            }
        </Formik>
    );
}

export default Login;
