import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';

import Gallery from './modules/gallery/compoennts/Gallery';
import GalleryAlbum from './modules/gallery/compoennts/GalleryAlbum';
import Navigation from './modules/common/components/Navigation';
import Posts from './modules/posts/components/Posts';
import Users from './modules/users/components/Users';
import { useState } from 'react';

function App() {
    const [page, setPage] = useState('posts');

    return (
        <div className="container">
            <Navigation page={page} navigate={setPage} />

            <Routes>
                <Route path="/" element={<Navigate to="/gallery" />} />
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/gallery" element={<Gallery />}>
                    <Route path=":albumId" element={<GalleryAlbum />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
