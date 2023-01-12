import './List.css';

import ListItem from '../ListItem/ListItem';
import React from 'react';
import { selectList } from '../../toolkitStore/slices/todosSlice';
import { useSelector } from 'react-redux';

function List() {
    const todos = useSelector(selectList);

    return (
        <div className="task-list u-full-width">
            {todos.map((item) => (
                <ListItem key={item.id} todo={item} />
            ))}
        </div>
    );
}

export default List;
