import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Chat.css';
import ChatInactive from './Components/ChatInactive/ChatInactive';
import ChatBarLeft from './Components/ChatBarLeft/ChatBarLeft';
import ChatActive from './Components/ChatActive/ChatActive';
import Settings from './Components/Settings/Settings';
import LayerBlur from './Components/LayerBlur/LayerBlur';
import AddContact from './Components/AddContact/AddContact';
import CreateGroup from './Components/CreateGroup/CreateGroup';

function Chat() {
    const socket = useSelector(state => state.socket.socket);

    useEffect(() => {
        if (socket) {
            socket.onmessage = (event) => {
                const message = JSON.parse(event.data);
                // Aqui va tu codigo para manipular los mensajes
                // que ingresan de WebSockets
                console.log('Received message:', message);
            };
        }
    }, [socket]);

    return (
        <div className="Chat">
            <><ChatBarLeft/></>
            <><ChatInactive/></>
            <><ChatActive/></>
            <><Settings/></>
            <><LayerBlur/></>
            <><AddContact/></>
            <><CreateGroup/></>
        </div>
    );
}

export default Chat;
