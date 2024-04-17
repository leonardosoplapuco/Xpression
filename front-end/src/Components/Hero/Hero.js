import './Hero.css';
import chat from '../../Media/chat.svg';

function Hero() {
    return(
        <main className='hero'>
            <div className='hero-text'>
                <h2>The new messaging client with the <b>XMPP Protocol</b></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                <div className='hero-links'>
                    <a className='button-link hero-link hero-link_1' href='#'>
                        <span className='button-link_text'>More info XMPP protocol</span>
                    </a>
                    <a className='button-link hero-link hero-link_2' href='#'>
                        <span className='button-link_text'>Create an account</span>
                    </a>
                </div>
            </div>

            <div className='hero-img'>
                <img src={chat} alt=""></img>
            </div>
        </main>
    );
}

export default Hero;