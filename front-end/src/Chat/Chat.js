import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import './Chat.css';
import ChatInactive from './Components/ChatInactive/ChatInactive';
import ChatBarLeft from './Components/ChatBarLeft/ChatBarLeft';
import ChatActive from './Components/ChatActive/ChatActive';
import Settings from './Components/Settings/Settings';
import LayerBlur from './Components/LayerBlur/LayerBlur';
import AddContact from './Components/AddContact/AddContact';
import CreateGroup from './Components/CreateGroup/CreateGroup';
import notificationSound from '../dist/notification-sound.mp3';

function Chat() {
    const socket = useSelector(state => state.socket.socket);
    const [roster, setRoster] = useState([]);
    const [activeContact, setActiveContact] = useState(null);
    const [lastMessage, setLastMessage] = useState({});
    const audioRef = useRef(null);

    const rosterRef = useRef(roster);

    useEffect(() => {
        rosterRef.current = roster;
    }, [roster]);

    useEffect(() => {
        if (socket) {
            socket.send(JSON.stringify({'type': 'get_roster'}));
            socket.onmessage = (event) => {
                const message = JSON.parse(event.data);
                console.log('Received message:', message);

                if (message.type === 'roster_update') {
                    const contacts = message.contacts;
                    contacts.pop();
                    setRoster(contacts);
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
                    setLastMessage(newMessage);

                    console.log('sender:', sender);

                    const contacts = [...rosterRef.current];
                    console.log('contacts', contacts);
                    if (contacts.includes(sender)) {
                        console.log('contacts:', contacts);
                        contacts.splice(contacts.indexOf(sender), 1);
                        contacts.unshift(sender)
                        setRoster(contacts);
                    }
                }
            };
        }
    }, [socket]);

    useEffect(() => {
        if (audioRef.current && lastMessage.sender && lastMessage.sender !== 'user') {
            audioRef.current.play();
        }
    }, [lastMessage]);

    console.log('roster:',roster);

    const sendMessage = (receiver, message) => {
        if (!socket) {
            console.error('Socket not available');
            return;
        }

        socket.send(JSON.stringify({
            'type': 'send_message',
            'to': receiver,
            'message': message,
        }));

        const newMessage = {
            text: message,
            sender: 'user',
            time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
        };

        setLastMessage(newMessage);

        const contacts = [...rosterRef.current];
        console.log('contacts', contacts);
        contacts.splice(contacts.indexOf(receiver), 1);
        contacts.unshift(receiver)
        setRoster(contacts);

        return newMessage;
    };

    const handleContactClick = (contact) => {
        setActiveContact(contact);
    };

    return (
        <div className="Chat">
            <audio ref={audioRef} src={notificationSound} />
            <ChatBarLeft roster={roster} onContactClick={handleContactClick} activeContact={activeContact}/>
            <ChatInactive/>
            <ChatActive activeContact={activeContact} sendMessage={sendMessage} lastMessage={lastMessage}/>
            <Settings/>
            <LayerBlur/>
            <AddContact/>
            <CreateGroup/>
        </div>
    );
}

export default Chat;
