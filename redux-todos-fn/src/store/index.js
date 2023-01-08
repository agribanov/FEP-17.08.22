import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
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

const store = createStore(todosReducer, middlewares);

export default store;
