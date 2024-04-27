import './Faq.css';

function Faq() {
    return (
        <div className='block-container' id='FAQ'>
            <div className="faq">
                <h2 className="title">Frequent questions</h2>

                <div className="faq-target faq-target_1 active" onClick={faqOneActive}>
                    <div className="faq-target_title_content">
                        <p className="faq-target_title">Is Xpression safe?</p>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                    <p className="faq-target_content">Yes, Xpression is a secure application using XMPP (Extensible Messaging and Presence Protocol). The XMPP protocol provides a layer of security through end-to-end encryption of messages, which means that messages sent between users are protected and can only be read by the sender and recipient.</p>
                </div>

                <div className="faq-target faq-target_2" onClick={faqTwoActive}>
                    <div className="faq-target_title_content">
                        <p className="faq-target_title">Does Xpression collect information about my conversations or activities in the application?</p>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                    <p className="faq-target_content">Xpression respects your privacy and does not collect or store information about your conversations or activities on the application.</p>
                </div>

                <div className="faq-target faq-target_3" onClick={faqThreeActive}>
                    <div className="faq-target_title_content">
                        <p className="faq-target_title">Can I access Xpression from multiple devices?</p>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                    <p className="faq-target_content">Yes, you can access Xpression from multiple devices as long as you log in with the same account on each device. Your conversations and data will be synchronized across devices for a consistent user experience.</p>
                </div>

                <div className="faq-target faq-target_4" onClick={faqFourActive}>
                    <div className="faq-target_title_content">
                        <p className="faq-target_title">Does Xpression offer voice or video calling?</p>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                    <p className="faq-target_content">Currently, Xpression is focused on instant messaging and does not offer voice or video calling features. However, we are constantly evaluating the needs of our users and considering new features for future updates.</p>    
                </div>
            </div>
        </div>
    );
}

function faqOneActive(){
    const faqOne = document.querySelector('.faq-target_1');
    const faqTwo = document.querySelector('.faq-target_2');
    const faqThree = document.querySelector('.faq-target_3');
    const faqFour = document.querySelector('.faq-target_4');

    faqOne.classList.add('active');
    faqTwo.classList.remove('active');
    faqThree.classList.remove('active');
    faqFour.classList.remove('active');
}

function faqTwoActive(){
    const faqOne = document.querySelector('.faq-target_1');
    const faqTwo = document.querySelector('.faq-target_2');
    const faqThree = document.querySelector('.faq-target_3');
    const faqFour = document.querySelector('.faq-target_4');

    faqOne.classList.remove('active');
    faqTwo.classList.add('active');
    faqThree.classList.remove('active');
    faqFour.classList.remove('active');
}

function faqThreeActive(){
    const faqOne = document.querySelector('.faq-target_1');
    const faqTwo = document.querySelector('.faq-target_2');
    const faqThree = document.querySelector('.faq-target_3');
    const faqFour = document.querySelector('.faq-target_4');

    faqOne.classList.remove('active');
    faqTwo.classList.remove('active');
    faqThree.classList.add('active');
    faqFour.classList.remove('active');
}

function faqFourActive(){
    const faqOne = document.querySelector('.faq-target_1');
    const faqTwo = document.querySelector('.faq-target_2');
    const faqThree = document.querySelector('.faq-target_3');
    const faqFour = document.querySelector('.faq-target_4');

    faqOne.classList.remove('active');
    faqTwo.classList.remove('active');
    faqThree.classList.remove('active');
    faqFour.classList.add('active');
}

export default Faq;
