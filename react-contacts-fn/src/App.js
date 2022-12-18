import './App.css';

import Navigation from './modules/common/components/Navigation';
import Posts from './modules/posts/components/Posts';
import Users from './modules/users/components/Users';
import { useState } from 'react';

function App() {
    const [page, setPage] = useState('posts');

    return (
        <div className="container">
            <Navigation page={page} navigate={setPage} />
            {page === 'users' ? <Users /> : null}
            {page === 'posts' ? <Posts /> : null}
        </div>
    );
}

export default App;
