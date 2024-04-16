import './App.css';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Login from '../Components/Login/Login';
import ServersTable from '../Components/ServersTable/ServersTable';
import Footer from '../Components/Footer/Footer'

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Login/>
            <ServersTable/>
        </div>
    );
}

export default App;