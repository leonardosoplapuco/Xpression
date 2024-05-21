import './ChatInactive.css';
import Xpression from '../../ChatImg/Xpression.png';

function ChatInactive() {
    return (
        <div className="ChatInactive">
            <img src={Xpression} alt="Xpression"></img>
            <h2 className="title">Xpression</h2>
            <p className="text">Mensajería libre para personas libres</p>
        </div>
    );
}

export default ChatInactive;