import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import filtersSliceReducer from './slices/filtersSlice';
import todosSliceReducer from './slices/todosSlice';

export default configureStore({
    reducer: {
        filters: filtersSliceReducer,
        todos: todosSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            createLogger({
                collapsed: true,
            })
        ),
});
