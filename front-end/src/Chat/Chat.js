import './Chat.css';
import ChatInactive from './Components/ChatInactive/ChatInactive';
import ChatBarLeft from './Components/ChatBarLeft/ChatBarLeft';
import ChatActive from './Components/ChatActive/ChatActive';
import Settings from './Components/Settings/Settings';
import LayerBlur from './Components/LayerBlur/LayerBlur';

function Chat() {
    return (
        <div className="Chat">
            <><ChatBarLeft/></>
            <><ChatInactive/></>
            <><ChatActive/></>
            <><Settings/></>
            <><LayerBlur/></>
        </div>
    );
}

export default Chat;