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
    const [activeContact, setActiveContact] = useState(null);

    useEffect(() => {
        if (socket) {
            socket.send(JSON.stringify({'type': 'get_roster'}));
            socket.onmessage = (event) => {
                const message = JSON.parse(event.data);
                console.log('Received message:', message);

                if (message.type === 'roster_update') {
                    setRoster(message.contacts);
                } else if (message.type === 'receive_message' && message.body) {
                    const sender = message.from.split('/')[0];

                    const newMessage = {
                        text: message.body,
                        sender: sender,
                        time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
                    };
                    console.log(newMessage);
    
                    // Almacenar el nuevo mensaje en el localStorage
                    const contactMessages = JSON.parse(localStorage.getItem(sender)) || [];
                    contactMessages.push(newMessage);
                    localStorage.setItem(sender, JSON.stringify(contactMessages));
                }
            };
        }
    }, [socket]);

    const handleContactClick = (contact) => {
        setActiveContact(contact);
    };

    return (
        <div className="Chat">
            <ChatBarLeft roster={roster} onContactClick={handleContactClick} activeContact={activeContact}/>
            <ChatInactive/>
            <ChatActive activeContact={activeContact}/>
            <Settings/>
            <LayerBlur/>
            <AddContact/>
            <CreateGroup/>
        </div>
    );
}

export default Chat;
