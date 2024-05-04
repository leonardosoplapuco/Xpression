import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Login}/>
                    <Route path="/signup" Component={SignUp}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;