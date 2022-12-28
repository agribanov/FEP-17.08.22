import React, { useEffect, useState } from 'react';

function Moveable({ children }) {
    const [position, setPosition] = useState({
        x: 50,
        y: 50,
    });
    useEffect(() => {
        const listener = ({ x, y }) => {
            setPosition({ x, y });
        };

        document.addEventListener('mousemove', listener);

        return () => {
            document.removeEventListener('mousemove', listener);
        };
    }, []);

    return <div>{children(position)}</div>;
}

export default Moveable;
