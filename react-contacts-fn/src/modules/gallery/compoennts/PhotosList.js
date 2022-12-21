import PhotosListItem from './PhotosListItem';
import React from 'react';

function PhotosList({ list }) {
    return list.map((item) => <PhotosListItem key={item.id} photo={item} />);
}

export default PhotosList;
