import './ChatInactive.css';
import Xpression from '../../dist/Xpression.png';

function ChatInactive() {
    return (
        <div className="ChatInactive">
            <img src={Xpression}></img>
            <h2>Xpresssion</h2>
            <p>The new messaging client with the XMPP protocol</p>

            <span>End-to-end encryption</span>
        </div>
    );
}

export default ChatInactive;