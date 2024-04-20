import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Chat from '../Chat/Chat';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/About" Component={About}/>
                    <Route path="/Chat" Component={Chat}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;