import React, { useEffect, useState } from 'react';
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
    const [roster, setRoster] = useState([]);

    useEffect(() => {
        if (socket) {
            socket.send(JSON.stringify({'type': 'get_roster'}));
            socket.onmessage = (event) => {
                const message = JSON.parse(event.data);
                // Aqui va tu codigo para manipular los mensajes
                // que ingresan de WebSockets
                console.log('Received message:', message);

                if (message.type === 'roster_update') {
                    setRoster(message.contacts);
                    console.log(message.contacts);
                    console.log(roster);
                }
            };
        }
    }, [socket]);

    console.log(roster);

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
