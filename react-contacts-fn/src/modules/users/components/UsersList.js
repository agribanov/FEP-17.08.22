import React from 'react';
import UsersListHeader from './UsersListHeader';
import UsersListItem from './UsersListItem';

function UsersList({ users, onDelete, onEdit }) {
    return (
        <div>
            <UsersListHeader />
            {users.map((item) => (
                <UsersListItem
                    key={item.id}
                    user={item}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
}

export default UsersList;
