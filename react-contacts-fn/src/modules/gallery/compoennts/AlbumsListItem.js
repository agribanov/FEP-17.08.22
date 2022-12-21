import { NavLink } from 'react-router-dom';
import React from 'react';

function AlbumsListItem({ album: { id, title } }) {
    return (
        <li>
            <NavLink to={'/gallery/' + id}>{title}</NavLink>
        </li>
    );
}

export default AlbumsListItem;
