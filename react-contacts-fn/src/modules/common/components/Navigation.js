import './Navigation.css';

import NavigationLink from './NavigationLink';
import React from 'react';

function Navigation({ page, navigate }) {
    return (
        <div className="row navigation">
            <NavigationLink
                path="posts"
                label="Posts"
                currentPath={page}
                navigate={navigate}
            />
            <NavigationLink
                path="users"
                label="Users"
                currentPath={page}
                navigate={navigate}
            />
            <NavigationLink
                path="gallery"
                label="Gallery"
                currentPath={page}
                navigate={navigate}
            />
        </div>
    );
}

export default Navigation;
