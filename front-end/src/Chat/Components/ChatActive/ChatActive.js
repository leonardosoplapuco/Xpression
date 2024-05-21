import React, { useState, useRef, useEffect } from 'react';
import './ChatActive.css';
import PhotoProfile from '../../../dist/photo-profile.png';

function ChatActive({ activeContact, sendMessage, lastMessage }) {
    const [message, setMessage] = useState('');
    const [messagesList, setMessagesList] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const messagesEndRef = useRef(null);

    const messageReceiver = activeContact;

    useEffect(() => {
        const loadMessagesFromStorage = () => {
            const contactMessages = JSON.parse(localStorage.getItem(activeContact)) || [];
            setMessagesList(contactMessages);
        };

        loadMessagesFromStorage();
    }, [activeContact, lastMessage]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messagesList]);

    useEffect(() => {
        setIsActive(activeContact !== null);
    }, [activeContact]);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() === '') {
            return;
        }

        const newMessage = sendMessage(messageReceiver, message);

        if (activeContact === messageReceiver) {
            setMessagesList(prevMessages => [...prevMessages, newMessage]);

            // Almacenar el nuevo mensaje en el localStorage
            const contactMessages = JSON.parse(localStorage.getItem(activeContact)) || [];
            contactMessages.push(newMessage);
            localStorage.setItem(activeContact, JSON.stringify(contactMessages));
        }

        setMessage('');
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
                        <div key={index} className={`MessageContainer ${
                            msg.sender === 'user' ? 'UserMessage' :
                            msg.sender === activeContact ? 'ContactMessage' :
                            ''
                        }`}>
                            <div className={`Message ${
                                msg.sender === 'user' ? 'UserMessageText' :
                                msg.sender === activeContact ? 'ContactMessageText' :
                                ''
                            }`}>
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
