import './RecentChats.css';
import Xpression from '../../ChatImg/Xpression.png'

function RecentChats() {
    return(
        <div className="RecentChats">
            <div className="RecentChat" onClick={ChatActive}>
                <div className="RecentChat_icon">
                    <img src={Xpression} alt=""></img>
                </div>
                <span className="RecentChat_Time">11:14</span>
                <div className="RecentChat_Resume">
                    <div className="RecentChat_Username">bryanyep</div>
                    <div className="LastMessage">I'm fine this new app is amazing</div>
                </div>
            </div>
            <div className="RecentChat" onClick={ChatActive}>
                <div className="RecentChat_icon">
                    <img src={Xpression} alt=""></img>
                </div>
                <span className="RecentChat_Time">09:00</span>
                <div className="RecentChat_Resume">
                    <div className="RecentChat_Username">diego</div>
                    <div className="RecentChat_NewMessages">3 new messages</div>
                </div>
            </div>
        </div>
    );
}

function ChatActive(){
    const ChatActiveContainer = document.querySelector('.ChatActiveContainer');
    const ChatInactive = document.querySelector('.ChatInactive');
    ChatActiveContainer.classList.add('active');
    ChatInactive.classList.add('desactive');
}

export default RecentChats;