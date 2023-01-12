import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    query: '',
    byStatus: 'all',
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterByStatus: (state, { payload }) => {
            state.byStatus = payload;
        },
        search: (state, { payload }) => {
            state.query = payload;
        },
    },
});

export const { filterByStatus, search } = filtersSlice.actions;
export default filtersSlice.reducer;

export function selectFilters({ filters }) {
    return filters;
}
