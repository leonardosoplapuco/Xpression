import './Chat.css';
import ChatInactive from './Components/ChatInactive/ChatInactive';
import ChatBarLeft from './Components/ChatBarLeft/ChatBarLeft';
import ChatActive from './Components/ChatActive/ChatActive'
import Settings from './Components/Settings/Settings'

function Chat() {
    return (
        <div className="Chat">
            <><ChatBarLeft/></>
            <><ChatInactive/></>
            <><ChatActive/></>
            <><Settings/></>
        </div>
    );
}

export default Chat;