import AlbumsListItem from './AlbumsListItem';
import React from 'react';
import useAlbums from '../hooks/useAlbums';

export default function AlbumsList() {
    const albums = useAlbums();

    return (
        <ul>
            {albums.map((item) => (
                <AlbumsListItem
                    key={item.id}
                    album={item}
                    onNavigate={() => {}}
                />
            ))}
        </ul>
    );
}
