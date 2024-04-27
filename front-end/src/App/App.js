import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';
import Chat from '../Chat/Chat';
import './App.css';

function App(){
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/login" Component={Login}/>
                    <Route path="/signup" Component={SignUp}/>
                    <Route path="/chat" Component={Chat}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;