import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './ChatActive.css';
import Xpression from '../../ChatImg/Xpression.png';

function ChatActive() {
    const [message, setMessage] = useState('');
    const [messagesList, setMessagesList] = useState([]);
    const messagesEndRef = useRef(null);

    const messageReceiver = 'leosoplapuco@movim.eu';

    // Instancia de la conexion con WebSocket
    const socket = useSelector(state => state.socket.socket);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messagesList]);

    function sendMessage(receiver, message) {
        if (socket) {
            socket.send(JSON.stringify({
                'type': 'send_message',
                'to': receiver,
                'message': message,
            }));
            socket.onmessage = (event) => {
                const message = JSON.parse(event.data);
                console.log('Received message:', message);

                if (message.type === 'send_message') {
                    return true;
                }
            };
        }
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() === '') {
            return;
        }

        if (sendMessage(messageReceiver, message) === true) {
            // Agrega el nuevo mensaje a la lista de mensajes
            const newMessage = {
                text: message,
                sender: 'user', // Indica que el mensaje es del usuario
                time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) // Formato de hora personalizado
            };
            setMessagesList([...messagesList, newMessage]);

            // Limpia el input después de enviar el mensaje
            setMessage('');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return(
        <div className="ChatActiveContainer">
            <div className="ChatActive">
                <div className="ChatActiveTop">
                    <div className="ContactActiveInfo">
                        <div className="button-link ReturnContactList" onClick={ReturnRecentChats}>
                            <span className="material-symbols-outlined text">arrow_back</span>
                        </div>

                        <img src={Xpression} alt=""></img>
                        <span className="ContactActiveName">bryanyep</span>
                    </div>

                    {/* <div className="button-link ContactActiveMenu" title="Menu">
                        <span className="material-symbols-outlined text">more_vert</span>
                    </div> */}
                </div>

                <div className="messages">
                    {messagesList.map((msg, index) => (
                        <div key={index} className={`UserMessage MessageContainer ${msg.sender === 'user' ? 'UserMessage' : 'ContactMessage'}`}>
                            <div className="UserMessageText Message">
                                <p className='text'>{msg.text}</p>
                                <span className={`${msg.sender === 'user' ? 'UserMessageDate' : 'ContactMessageDate'} MessageDate`}>{msg.time}</span>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} /> {/* Esta referencia se utilizará para desplazar el contenedor de mensajes hacia abajo */}
                </div>

                <div className="ChatActiveInputArea">
                    {/* <div className="button-link ContactActiveSendImage" title="Send">
                        <span className="material-symbols-outlined button-link_text">image</span>
                    </div> */}

                    <input 
                        className="ChatActiveInput" 
                        placeholder="Send a message"
                        value={message}
                        onChange={handleMessageChange}
                        onKeyDown={handleKeyDown} // Agrega el evento onKeyDown
                    />

                    <div className="button-link ContactActiveSendMessage" title="Send" onClick={handleSendMessage}>
                        <span className="material-symbols-outlined button-link_text">send</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ReturnRecentChats(){
    const ChatActiveContainer = document.querySelector('.ChatActiveContainer');
    ChatActiveContainer.classList.remove('active');
}

export default ChatActive;
