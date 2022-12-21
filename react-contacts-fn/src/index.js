import './modules/common/css/normalize.css';
import './modules/common/css/skeleton.css';
import './modules/common/css/dark-theme.css';
import './index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
