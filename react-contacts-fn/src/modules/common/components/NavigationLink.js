import { NavLink } from 'react-router-dom';
import React from 'react';

function NavigationLink({ path, navigate, label, currentPath }) {
    return (
        <div className="three columns navigation-link">
            <NavLink to={path}>{label}</NavLink>
        </div>
    );
}

export default NavigationLink;
