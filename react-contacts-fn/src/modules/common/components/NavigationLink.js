import React from 'react';

function NavigationLink({ path, navigate, label, currentPath }) {
    return (
        <div
            className={
                'three columns navigation-link' +
                (currentPath === path ? ' active' : '')
            }
            onClick={() => navigate(path)}
        >
            {label}
        </div>
    );
}

export default NavigationLink;
