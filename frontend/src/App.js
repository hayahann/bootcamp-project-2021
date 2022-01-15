import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipePage from './components/RecipePage';
import AboutPage from './components/AboutPage';
import Navbar from './components/navbar';

function App() {

    useEffect( () => console.log('Refresh'));

    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/Recipe/:id' element={<RecipePage/>} />
            <Route exact path='/About' element={<AboutPage/>} />
        </Routes>
        </BrowserRouter>
        </>

    );
}

export default App;