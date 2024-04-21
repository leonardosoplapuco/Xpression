import './Chat.css';
import ChatInactive from './Components/ChatInactive/ChatInactive';
import ChatBarLeft from './Components/ChatBarLeft/ChatBarLeft'

function Chat() {
    return (
        <div className="Chat">
            <>
                <ChatInactive/>
                <ChatBarLeft/>
            </>
        </div>
    );
}

export default Chat;