import { useEffect, useState } from 'react';

import api from '../../../api';

export default function usePhotos(albumId) {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        if (!albumId) return;

        api.get('photos?albumId=' + albumId).then(({ data }) =>
            setPhotos(data)
        );
    }, [albumId]);

    return photos;
}
