import './Faq.css';

function Faq() {
    return (
        <div className='block-container' id='FAQ'>
            <div className="faq">
                <h2 className="title">Frequent questions</h2>

                <div className="faq-target faq-target_1 active" onClick={faqOneActive}>
                    <div className="faq-target_title_content">
                        <p className="faq-target_title">Question #1</p>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                    <p className="faq-target_content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</p>
                </div>

                <div className="faq-target faq-target_2" onClick={faqTwoActive}>
                    <div className="faq-target_title_content">
                        <p className="faq-target_title">Question #2</p>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                    <p className="faq-target_content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</p>
                </div>

                <div className="faq-target faq-target_3" onClick={faqThreeActive}>
                    <div className="faq-target_title_content">
                        <p className="faq-target_title">Question #3</p>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                    <p className="faq-target_content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</p>
                </div>
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