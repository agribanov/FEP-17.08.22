import './common/css/normalize.css';
import './common/css/skeleton.css';
import './common/css/dark-theme.css';
import './index.css';

import App from './components/App/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { getTodos } from './toolkitStore/slices/todosSlice';
// import store from './store';
import store from './toolkitStore';

store.dispatch(getTodos());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
