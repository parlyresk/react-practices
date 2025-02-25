import React from 'react';
import {HashRouter, BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Error404 from "./component/Error404";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<Main />} />
                <Route path={'/gallery'} element={<Gallery />} />
                <Route path={'/guestbook'} element={<Guestbook />} />
                <Route path='*' element={<Error404 />}/>
            </Routes>
        </HashRouter>
    );
}