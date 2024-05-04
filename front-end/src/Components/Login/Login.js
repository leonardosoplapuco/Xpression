import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    function handleUserName(event) {
        setUserName(event.target.value);
    }

    function handleUserPassword(event) {
        setUserPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('ESTOY DENTRO DE HANDLESUBMIT');
        const url = 'ws://127.0.0.1:8000/ws/socket-server/';
        console.log(url);
        const loginSocket = new WebSocket(url);

        alert('SE CREÓ EL OBJECTO WEBSOCKET');

        const credentials = {
            'username': userName,
            'password': userPassword,
        };
        loginSocket.send(JSON.stringify(credentials));
        loginSocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log(data);
            if (data.success === true) {
                navigate('/chat');
            }
        };
    };

    return (
        <div className="block-container" id='Login'>
            <form
                className="login"
                onSubmit={handleSubmit}
            >
                <h2 className='title'>Xpression</h2>

                <div className="login-section">
                    <label htmlFor="XMPPAddressLogin" className="login-section_icon">
                        <span className="material-symbols-outlined">alternate_email</span>
                    </label>
                    <input
                        type='email'
                        className="login-section_input"
                        id="XMPPAddressLogin"
                        placeholder="XMPP address"
                        value={userName}
                        onChange={handleUserName}
                    />
                </div>
                <div className="login-section">
                    <label htmlFor="PasswordLogin" className="login-section_icon">
                        <span className="material-symbols-outlined">lock</span>
                    </label>
                    <input
                        type='password'
                        className="login-section_input"
                        id="PasswordLogin"
                        placeholder="Password"
                        value={userPassword}
                        onChange={handleUserPassword}
                    />
                </div>

                <button type="submit" className="button-link submit" id="Login-submit">
                    <span className='button-link_text'>Sign In</span>
                </button>

                <a href='/signup' className="button-link login-signUp_link">
                    <span className='button-link_text'>Create an account</span>
                </a>
            </form>
        </div>
    );
}

export default Login;
