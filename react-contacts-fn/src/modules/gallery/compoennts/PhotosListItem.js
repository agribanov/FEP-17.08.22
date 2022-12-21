import React from 'react';

function PhotosListItem({ photo: { title, thumbnailUrl } }) {
    return <img src={thumbnailUrl} alt={title} className="four columns" />;
}

export default PhotosListItem;
