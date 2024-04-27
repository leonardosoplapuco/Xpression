import './ChatInactive.css';
import Xpression from '../../ChatImg/Xpression.png';

function ChatInactive() {
    return (
        <div className="ChatInactive">
            <img src={Xpression}></img>
            <h2 className="title">Xpression</h2>
            <p className="text">The new messaging client with the XMPP protocol</p>

            <span className="text">End-to-end encryption</span>
        </div>
    );
}

export default ChatInactive;