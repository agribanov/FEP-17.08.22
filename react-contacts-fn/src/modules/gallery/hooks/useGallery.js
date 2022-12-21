import { useEffect, useState } from 'react';

import useAlbums from './useAlbums';
import usePhotos from './usePhotos';

export default function useGallery() {
    const [albumId, setAlbumId] = useState(null);

    const albums = useAlbums();
    const photos = usePhotos(albumId);

    useEffect(() => {
        if (!albums.length) return;

        setAlbumId(albums[0].id);
    }, [albums]);

    return {
        albums,
        getAlbumPhotos: setAlbumId,
        photos,
    };
}
