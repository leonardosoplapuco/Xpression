import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';
import Chat from '../Chat/Chat'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Login}/>
                    <Route path="/signup" Component={SignUp}/>
                    <Route path="/chat" Component={Chat}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;