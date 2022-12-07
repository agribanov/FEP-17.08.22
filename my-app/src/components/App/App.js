import './App.css';

import { Component } from 'react';
import Form from '../Form/Form';
import List from '../List/List';

class App extends Component {
    state = {
        todos: [
            { id: 1, title: 'Item 10', isDone: false },
            { id: 2, title: 'Item 20', isDone: true },
            { id: 3, title: 'Item 30', isDone: false },
        ],
    };

    toggleTodo = (id) => {
        this.setState({
            todos: this.state.todos.map((item) =>
                item.id !== id
                    ? item
                    : {
                          ...item,
                          isDone: !item.isDone,
                      }
            ),
        });
    };

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter((item) => item.id !== id),
        });
    };

    createTodo = (newTodo) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    ...newTodo,
                    id: Date.now(),
                    isDone: false,
                },
            ],
        });
    };

    render() {
        return (
            <>
                <List
                    todos={this.state.todos}
                    onToggle={this.toggleTodo}
                    onDelete={this.deleteTodo}
                />
                <Form onSave={this.createTodo} />
            </>
        );
    }
}

export default App;
