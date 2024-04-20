import './Hero.css';
import chat from '../../dist/chat.svg';

function Hero() {
    return(
        <main className='hero'>
            <div className='hero-text'>
                <h2>The new messaging client with the <b>XMPP Protocol</b></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                <div className='hero-links'>
                    <a className='button-link button-link_white hero-link hero-link_1' href='https://xmpp.org/' target='_blank'>
                        <span className='button-link_text'>More info XMPP protocol</span>
                    </a>
                    <div className='button-link button-link_bg_white hero-link hero-link_2' onClick={SignUpActive}>
                        <span className='button-link_text'>Create an account</span>
                    </div>
                </div>
            </div>

            <div className='hero-img'>
                <img src={chat} alt=""></img>
            </div>
        </main>
    );
}

function SignUpActive(){
    const signUp = document.querySelector('.signUp-bg');

    signUp.classList.add('active');
}

export default Hero;