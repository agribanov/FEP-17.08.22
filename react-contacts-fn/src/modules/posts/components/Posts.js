import React, { useRef } from 'react';

import { useNavigate } from 'react-router-dom';

function Posts() {
    const inputRef = useRef();
    const navigate = useNavigate();

    function onClick() {
        inputRef.current.focus();
    }

    function onGoToClick() {
        navigate('/gallery');
    }

    return (
        <div>
            <button onClick={onClick}>Click me</button>
            <input ref={inputRef} type="text" name="name" />

            <button onClick={onGoToClick}>Go to Gallery</button>
        </div>
    );
}

export default Posts;
