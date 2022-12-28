import React from 'react';

function Square({ x, y }) {
    return (
        <div
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'blue',
                position: 'absolute',
                top: y - 50,
                left: x - 50,
            }}
        ></div>
    );
}

export default Square;
