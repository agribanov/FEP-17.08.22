import AlbumsList from './AlbumsList';
import { Outlet } from 'react-router-dom';
import PhotosList from './PhotosList';
import React from 'react';
import useGallery from '../hooks/useGallery';

function Gallery() {
    return (
        <div className="row">
            <div className="three columns">
                <AlbumsList />
            </div>
            <div className="nine columns">
                <Outlet />
            </div>
        </div>
    );
}

export default Gallery;
