import { applyMiddleware, combineReducers, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import { filtersReducer } from './reducers/filtersReducer';
import thunk from 'redux-thunk';
import todosReducer from './reducers/todosReducer';

// const myLogger = (store) => {
//     return (next) => (action) => {
//         console.log('ACTION FIRED: ', action);
//         next(action);
//     };
// };

const middlewares = applyMiddleware(
    // myLogger,
    thunk,
    createLogger({
        collapsed: true,
    })
);

const rootReducer = combineReducers({
    filters: filtersReducer,
    todos: todosReducer,
});

const store = createStore(rootReducer, middlewares);

export default store;
