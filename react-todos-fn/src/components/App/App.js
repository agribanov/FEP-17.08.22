import './App.css';

import {
    createItem,
    getList,
    removeItem,
    updateItem,
} from '../../services/todosService';
import { useEffect, useState } from 'react';

import Form from '../Form/Form';
import List from '../List/List';

function App() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getList().then(setList);
    }, []);

    function toggleTodo(id) {
        const todo = list.find((item) => item.id === id);

        updateItem({ ...todo, isDone: !todo.isDone }).then((data) => {
            setList(list.map((item) => (item.id === id ? data : item)));
        });
    }

    function deleteTodo(id) {
        removeItem(id).then(() => {
            setList(list.filter((item) => item.id !== id));
        });
    }

    function saveTodo(newTodo) {
        createItem({ ...newTodo, isDone: false }).then((data) =>
            setList([...list, data])
        );
    }

    return (
        <div className="container">
            <List todos={list} onToggle={toggleTodo} onDelete={deleteTodo} />
            <Form onSave={saveTodo} />
        </div>
    );
}

export default App;
