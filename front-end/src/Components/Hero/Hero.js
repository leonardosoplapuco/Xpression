import './Hero.css';
import chat from '../../dist/chat.svg';

function Hero() {
    return(
        <main className='block-container' id="Hero">
            <div className="hero">
                <div className='hero-text'>
                    <h2>The new messaging client with the <b>XMPP Protocol</b></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                    <div className='hero-links'>
                        <a className='button-link button-link-bg-blue hero-link hero-link_1' href='https://xmpp.org/' target='_blank'>
                            <span className='button-link_text'>More info XMPP protocol</span>
                        </a>
                        <a href='/signup' className='button-link button-link-bg-white hero-link hero-link_2'>
                            <span className='button-link_text'>Create an account</span>
                        </a>
                    </div>
                </div>

                <div className='hero-img'>
                    <img src={chat} alt=""></img>
                </div>
            </div>
        </main>
    );
}

export default Hero;