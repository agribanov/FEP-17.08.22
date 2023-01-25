import React, { useCallback, useEffect, useMemo, useState } from 'react';

function progression(value) {
    console.log('function fired');
    if (value === 0) return 0;

    return value + progression(value - 1);
}

function getStoredValue() {
    const value = localStorage.getItem('first'); // null

    return value ? value : 0;
}

function App() {
    const [first, setFirst] = useState(getStoredValue());
    const [second, setSecond] = useState(0);

    useEffect(() => {
        localStorage.setItem('first', first);
    }, [first]);

    const result = useMemo(() => progression(first), [first, progression]);

    return (
        <div>
            Result: {result}
            <button onClick={() => setFirst(first + 1)}>
                Add First ({first})
            </button>
            <button onClick={() => setSecond(second + 1)}>
                Add second ({second})
            </button>
        </div>
    );
}

export default App;
