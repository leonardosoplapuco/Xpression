import './ChatBarLeft.css';
import ChatListButtons from '../ChatListButtons/ChatListButtons';
import Settings from '../Settings/Settings'
import SearchBar from '../SearchBar/SearchBar'
import RecentChats from '../RecentChats/RecentChats';

function ChatBarLeft() {
    return (
        <div className="ChatBarLeft">
            <div className="ChatList_header">
                <h2>Xpression</h2>
                <>
                    <ChatListButtons/>
                    <Settings/>
                </>
            </div>

            <><SearchBar/></>

            <><RecentChats/></>
        </div>
    );
}

export default ChatBarLeft;