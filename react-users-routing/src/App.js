import './App.css';

import { Button, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Circle from './Circle';
import Home from './modules/home/pages/Home';
import MainNavigation from './modules/common/components/MainNavigation';
import Moveable from './Moveable';
import Square from './Square';
import UserForm from './modules/users/pages/UserForm';
import Users from './modules/users/pages/Users';
import UsersList from './modules/users/pages/UsersList';

function App() {
    return (
        // <>
        //     <Moveable render={({ x, y }) => <Circle x={x} y={y} />} /> */}
        //     <Moveable>{(position) => <Square {...position} />}</Moveable>
        //     <Circle x={100} y={100} />
        //     <Square x={50} y={50} />
        // </>
        <Container maxWidth="sm">
            <MainNavigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="users" element={<Users />}>
                    <Route path="" element={<UsersList />} />
                    <Route path=":id" element={<UserForm />} />
                </Route>
            </Routes>
        </Container>
    );
}

export default App;
