import './Hero.css';
import chat from '../../Media/chat.svg';

function Hero() {
    return(
        <main className='hero'>
            <h2>The new messaging client with the <b>XMPP Protocol</b></h2>
            <img src={chat} alt=""></img>
        </main>
    );
}

export default Hero;