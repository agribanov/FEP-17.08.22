import React from 'react';

function UsersListHeader() {
    return (
        <div className="row">
            <div className="three columns">Name</div>
            <div className="three columns">Surname</div>
            <div className="three columns">Email</div>
            <div className="three columns">Actions</div>
        </div>
    );
}

export default UsersListHeader;
