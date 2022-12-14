import './ListItem.css';

import React from 'react';

function ListItem({ todo, onToggle, onDelete }) {
    return (
        <div
            className={'task-item' + (todo.isDone ? ' done' : '')}
            onClick={() => onToggle(todo.id)}
        >
            {todo.title}
            <span
                className="delete-btn"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(todo.id);
                }}
            >
                x
            </span>
        </div>
    );
}

export default ListItem;
