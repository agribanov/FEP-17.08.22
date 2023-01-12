import FilterButton from '../FilterButton/FilterButton';
import React from 'react';
import { search } from '../../toolkitStore/slices/filtersSlice';
import { useDispatch } from 'react-redux';

function FiltersPanel() {
    const dispatch = useDispatch();
    return (
        <div className="row">
            <FilterButton value="all" label="All" />
            <FilterButton value="done" label="Done" />
            <FilterButton value="todo" label="Todo" />
            <input
                style={{ float: 'right' }}
                type="text"
                placeholder="Filter"
                onChange={(e) => dispatch(search(e.target.value))}
            />
        </div>
    );
}

export default FiltersPanel;
