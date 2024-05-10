import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './ChatActive.css';
import PhotoProfile from '../../../dist/photo-profile.png';

function ChatActive({ activeContact }) {
    const [message, setMessage] = useState('');
    const [messagesList, setMessagesList] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const messagesEndRef = useRef(null);

    const socket = useSelector(state => state.socket.socket);

    const messageReceiver = activeContact;

    useEffect(() => {
        const loadMessagesFromStorage = () => {
            const contactMessages = JSON.parse(localStorage.getItem(activeContact)) || [];
            setMessagesList(contactMessages);
        };

        loadMessagesFromStorage();
    }, [activeContact]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messagesList]);

    useEffect(() => {
        setIsActive(activeContact !== null);
    }, [activeContact]);

    useEffect(() => {
        if (socket) {
            socket.onmessage = (event) => {
                const incomingMessage = JSON.parse(event.data);
                if (incomingMessage.type === 'receive_message' && incomingMessage.body) {
                    const newMessage = {
                        text: incomingMessage.body,
                        sender: 'contact',
                        time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
                    };
    
                    // Agregar el nuevo mensaje al estado messagesList
                    setMessagesList(prevMessages => [...prevMessages, newMessage]);
    
                    // Almacenar el nuevo mensaje en el localStorage
                    const contactMessages = JSON.parse(localStorage.getItem(activeContact)) || [];
                    contactMessages.push(newMessage);
                    localStorage.setItem(activeContact, JSON.stringify(contactMessages));
                }
            };
        }
    }, [socket, activeContact]);

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

        // Actualizar los mensajes solo si el contacto activo es igual al receptor del mensaje
        if (activeContact === receiver) {
            setMessagesList(prevMessages => [...prevMessages, newMessage]);

            // Almacenar el nuevo mensaje en el localStorage
            const contactMessages = JSON.parse(localStorage.getItem(activeContact)) || [];
            contactMessages.push(newMessage);
            localStorage.setItem(activeContact, JSON.stringify(contactMessages));
        }

        setMessage('');
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() === '') {
            return;
        }

        sendMessage(messageReceiver, message);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className={`ChatActiveContainer ${isActive ? 'active' : ''}`}>
            <div className="ChatActive">
                <div className="ChatActiveTop">
                    <div className="ContactActiveInfo">
                        <div className="button-link ReturnContactList" onClick={toggleActive}>
                            <span className="material-symbols-outlined text">arrow_back</span>
                        </div>
                        <img src={PhotoProfile} alt=""/>
                        <span className="ContactActiveName">{activeContact}</span>
                    </div>
                </div>
                <div className="messages">
                    {messagesList.map((msg, index) => (
                        <div key={index} className={`MessageContainer ${msg.sender === 'user' ? 'UserMessage' : 'ContactMessage'}`}>
                            <div className={`Message ${msg.sender === 'user' ? 'UserMessageText' : 'ContactMessageText'}`}>
                                <p className='text'>{msg.text}</p>
                                <span className="MessageDate">{msg.time}</span>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="ChatActiveInputArea">
                    <input
                        className="ChatActiveInput"
                        placeholder="Escriba un mensaje aquí"
                        value={message}
                        onChange={handleMessageChange}
                        onKeyDown={handleKeyDown}
                    />
                    <div className="button-link ContactActiveSendMessage" title="Enviar" onClick={handleSendMessage}>
                        <span className="material-symbols-outlined button-link_text">send</span>
                    </div>
                </div>
            </div>
        </div>
    );

    function toggleActive() {
        setIsActive(!isActive);
    }
}

export default ChatActive;