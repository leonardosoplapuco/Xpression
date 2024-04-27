import React from 'react';
import './Home.css';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import ServersTable from '../Components/ServersTable/ServersTable'
import Faq from '../Components/Faq/Faq';
import Footer from '../Components/Footer/Footer';

function Home() {
    return(
        <>
            <Header/>
            <Hero/>
            <ServersTable/>
            <Faq/>
            <Footer/>
        </>
    );
}

export default Home;