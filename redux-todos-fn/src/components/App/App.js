import './App.css';

import { useEffect, useState } from 'react';

import Form from '../Form/Form';
import List from '../List/List';

function App() {
    // function toggleTodo(id) {
    //     setList(
    //         list.map((item) =>
    //             item.id === id ? { ...item, isDone: !item.isDone } : item
    //         )
    //     );
    // }

    // function deleteTodo(id) {
    //     setList(list.filter((item) => item.id !== id));
    // }

    // function saveTodo(newTodo) {
    //     setList([
    //         ...list,
    //         {
    //             id: Date.now(),
    //             ...newTodo,
    //             isDone: false,
    //         },
    //     ]);
    // }

    return (
        <div className="container">
            <List />
            <Form />
        </div>
    );
}

export default App;
