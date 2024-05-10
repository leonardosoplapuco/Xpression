import './ChatBarLeft.css';
import ChatListButtons from '../ChatListButtons/ChatListButtons';
import RecentChats from '../RecentChats/RecentChats';

function ChatBarLeft({ roster, onContactClick, activeContact }) {
    return (
        <div className="ChatBarLeft">
            <div className="ChatList_header">
                <h2 className="subtitle">Xpression</h2>
                <ChatListButtons/>
            </div>
            <RecentChats roster={roster} onContactClick={onContactClick} activeContact={activeContact}/>
        </div>
    );
}

export default ChatBarLeft;
