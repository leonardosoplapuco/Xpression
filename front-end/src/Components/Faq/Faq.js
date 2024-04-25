import './Faq.css';

function Faq() {
    return (
        <div className='block-container' id='FAQ'>
            <div className="faq">
                <h2 className="title">Frequent questions</h2>

                <div className="faq-target faq-target_1 active" onClick={faqOneActive}>
                    <div className="faq-target_title_content">
                        <p className="faq-target_title">¿Xpression es seguro?</p>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                    <p className="faq-target_content">Sí, Xpression es una aplicación segura que utiliza el protocolo XMPP (Extensible Messaging and Presence Protocol). El protocolo XMPP proporciona una capa de seguridad mediante el cifrado de extremo a extremo de los mensajes, lo que significa que los mensajes enviados entre los usuarios están protegidos y solo pueden ser leídos por el remitente y el destinatario.</p>
                </div>

                <div className="faq-target faq-target_2" onClick={faqTwoActive}>
                    <div className="faq-target_title_content">
                        <p className="faq-target_title">¿Xpression recopila información sobre mis conversaciones o actividades en la aplicación?</p>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                    <p className="faq-target_content">Xpression respeta tu privacidad y no recopila ni almacena información sobre tus conversaciones o actividades en la aplicación.</p>
                </div>

                <div className="faq-target faq-target_3" onClick={faqThreeActive}>
                    <div className="faq-target_title_content">
                        <p className="faq-target_title">¿Puedo acceder a Xpression desde múltiples dispositivos?</p>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                    <p className="faq-target_content">Sí, puedes acceder a Xpression desde múltiples dispositivos siempre y cuando inicies sesión con la misma cuenta en cada dispositivo. Tus conversaciones y datos estarán sincronizados entre dispositivos para una experiencia de usuario coherente.</p>
                </div>

                <div className="faq-target faq-target_4" onClick={faqFourActive}>
                    <div className="faq-target_title_content">
                        <p className="faq-target_title">¿Xpression ofrece funciones de llamadas de voz o video?</p>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                    <p className="faq-target_content"> Actualmente, Xpression se enfoca en la mensajería instantánea y no ofrece funciones de llamadas de voz o video. Sin embargo, estamos constantemente evaluando las necesidades de nuestros usuarios y considerando nuevas características para futuras actualizaciones.</p>                                                                                                                     		    </div>
            </div>
        </div>
    );
}

function faqOneActive(){
    const faqOne = document.querySelector('.faq-target_1');
    const faqTwo = document.querySelector('.faq-target_2');
    const faqThree = document.querySelector('.faq-target_3');

    faqOne.classList.add('active');
    faqTwo.classList.remove('active');
    faqThree.classList.remove('active');
}

function faqTwoActive(){
    const faqOne = document.querySelector('.faq-target_1');
    const faqTwo = document.querySelector('.faq-target_2');
    const faqThree = document.querySelector('.faq-target_3');

    faqOne.classList.remove('active');
    faqTwo.classList.add('active');
    faqThree.classList.remove('active');
}

function faqThreeActive(){
    const faqOne = document.querySelector('.faq-target_1');
    const faqTwo = document.querySelector('.faq-target_2');
    const faqThree = document.querySelector('.faq-target_3');

    faqOne.classList.remove('active');
    faqTwo.classList.remove('active');
    faqThree.classList.add('active');
}

export default Faq;
