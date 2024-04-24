import './ChatActive.css';
import Xpression from '../../ChatImg/Xpression.png';

function ChatActive() {
    return(
        <div className="ChatActiveContainer">
            <div className="ChatActive">
                <div className="ChatActiveTop">
                    <div className="ContactActiveInfo">
                        <div className="button-link ReturnContactList" onClick={ReturnRecentChats}>
                            <span className="material-symbols-outlined text">arrow_back</span>
                        </div>

                        <img src={Xpression} alt=""></img>
                        <span className="ContactActiveName">bryanyep</span>
                    </div>

                    <div className="button-link ContactActiveMenu" title="Menu">
                        <span className="material-symbols-outlined text">more_vert</span>
                    </div>
                </div>

                <div className="messages">
                    <div className="ContactMessage MessageContainer">
                        <div className="ContactMessageText Message">
                            <p>Hi Leo!</p>
                            <span className="ContactMessageDate MessageDate">11:10</span>
                        </div>
                    </div>
                    <div className="UserMessage MessageContainer">
                        <div className="UserMessageText Message">
                            <p>Hi Bryan, how r u?</p>
                            <span className="UserMessageDate MessageDate">11:12</span>
                        </div>
                    </div>
                    <div className="ContactMessage MessageContainer">
                        <div className="ContactMessageText Message">
                            <p>I'm fine this new app is amazing</p>
                            <span className="ContactMessageDate MessageDate">11:14</span>
                        </div>
                    </div>
                </div>

                <div className="ChatActiveInputArea">
                    <div className="button-link ContactActiveSendImage" title="Send">
                        <span className="material-symbols-outlined button-link_text">image</span>
                    </div>

                    <input className="ChatActiveInput" placeholder="Send a message"></input>

                    <div className="button-link ContactActiveSendMessage" title="Send">
                        <span className="material-symbols-outlined button-link_text">send</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ReturnRecentChats(){
    const ChatActiveContainer = document.querySelector('.ChatActiveContainer');
    ChatActiveContainer.classList.remove('active');
}

export default ChatActive;