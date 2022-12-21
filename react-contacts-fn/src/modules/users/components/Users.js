import React, { useState } from 'react';

import UserForm from './UserForm';
import UsersList from './UsersList';
import useUsers from '../hooks/useUsers';

function Users() {
    const { users, isLoading, deleteUser, saveUser } = useUsers();
    const [currentUser, setCurrentUser] = useState({});

    function editUser(id) {
        setCurrentUser(users.find((item) => item.id === id));
    }

    function onSave(newUser) {
        saveUser(newUser);
        setCurrentUser({});
    }

    return (
        <div>
            {isLoading ? (
                'Loading....'
            ) : (
                <>
                    <UsersList
                        users={users}
                        onDelete={deleteUser}
                        onEdit={editUser}
                    />
                    <UserForm onSave={onSave} currentUser={currentUser} />
                </>
            )}
        </div>
    );
}

export default Users;
