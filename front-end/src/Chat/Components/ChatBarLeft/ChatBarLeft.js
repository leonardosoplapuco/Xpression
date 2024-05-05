import './ChatBarLeft.css';
import ChatListButtons from '../ChatListButtons/ChatListButtons';
import SearchBar from '../SearchBar/SearchBar'
import RecentChats from '../RecentChats/RecentChats';

function ChatBarLeft() {
    return (
        <div className="ChatBarLeft">
            <div className="ChatList_header">
                <h2 className="subtitle">Xpression</h2>
                <><ChatListButtons/></>
            </div>
            <><SearchBar/></>
            <><RecentChats/></>
        </div>
    );
}

export default ChatBarLeft;