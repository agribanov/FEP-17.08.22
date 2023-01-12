import {
    filterByStatus,
    selectFilters,
} from '../../toolkitStore/slices/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';

function FilterButton({ value, label }) {
    const { byStatus } = useSelector(selectFilters);
    const dispatch = useDispatch();

    return (
        <button
            className={byStatus === value ? 'button-primary' : ''}
            onClick={() => dispatch(filterByStatus(value))}
        >
            {label}
        </button>
    );
}

export default FilterButton;
