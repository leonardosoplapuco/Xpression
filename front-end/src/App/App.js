import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import login from '../Components/login/login';
import signup from '../Components/signup/signup';
import Chat from '../Chat/Chat';
import './App.css';

function App(){
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/login" Component={login}/>
                    <Route path="/signup" Component={signup}/>
                    <Route path="/chat" Component={Chat}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;