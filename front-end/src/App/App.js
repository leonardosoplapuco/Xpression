import './App.css';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';
import ServersTable from '../Components/ServersTable/ServersTable';
import Footer from '../Components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Login/>
            <SignUp/>
            <ServersTable/>
            <Footer/>
        </div>
    );
}

export default App;