import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { initializeWebSocket } from '../../actions/socketActions';
import './Login.css'
import LoginImgLight from '../../dist/login-img_light.svg';
import LoginImgDark from '../../dist/login-img_dark.svg';
import DarkButton  from '../DarkButton/DarkButton';
import Footer from '../Footer/Footer'

function Login() {

    const navigate = useNavigate();
    const dispatch= useDispatch();

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    function handleUserName(event) {
        setUserName(event.target.value);
    }

    function handleUserPassword(event) {
        setUserPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = 'ws://127.0.0.1:8000/ws/socket-server/';
        const loginSocket = new WebSocket(url);

        loginSocket.onopen = () => {
            const credentials = {
                'type': 'login_request',
                'username': userName,
                'password': userPassword,
            };
            loginSocket.send(JSON.stringify(credentials));

            // Sends the WebSocket object to Redux store
            dispatch(initializeWebSocket(loginSocket));
        };

        loginSocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log(data);
            if (data.success === true) {
                let userId = 0;
                axios.post('http://127.0.0.1:8000/users/', {
                    username: userName.split('@')[0],
                    address: userName,
                  })
                    .then((response) => {
                      console.log(response.data)
                      userId = response.data.id;
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                
                console.log('userId:', userId);
//                axios.post('http://127.0.0.1:8000/application_configurations/', {
//                    user: userId,
//                    username: userName.split('@')[0],
//                    full_name: '',
//                    address: userName,
//                    theme: false,
//                    language: '',
//                  })
//                    .then((response) => {
//                      console.log(response.data)
//                    })
//                    .catch((error) => {
//                      console.error(error);
//                    });

                navigate('/chat');
            }
        };
    };

    return(
        <div className="Login">
            <><DarkButton/></>

            <div className="block-container" id="Login">
                <div className='login'>
                    <div className='login-target login-target_1'>
                        <img src={LoginImgLight} alt="Xpression" className='login-img-light'/>
                        <img src={LoginImgDark} alt="Xpression" className='login-img-dark'/>
                    </div>

                    <div className='login-target login-target_2'>
                        <h2 className='subtitle text'>Xpression</h2>
                        <p className='text'>Free chat for free people</p>

                        <form
                            className='form login-form'
                            onSubmit={handleSubmit}
                        >
                            <fieldset className='login-form_target'>
                                <span className="material-symbols-outlined form-icon text">alternate_email</span>
                                <input
                                    name='email'
                                    type='email'
                                    id='email'
                                    className='form-input text'
                                    title='Email'
                                    placeholder=''
                                    required
                                    value={userName}
                                    onChange={handleUserName}
                                />
                                <label htmlFor="email" className="text form-label">XMPP address</label>
                            </fieldset>
                            <fieldset className="login-form_target">
                                <span className="material-symbols-outlined form-icon text">lock</span>
                                <input
                                    name='password'
                                    type="password"
                                    id='password'
                                    className="form-input text"
                                    title='Password'
                                    placeholder=""
                                    required
                                    value={userPassword}
                                    onChange={handleUserPassword}
                                />
                                <label htmlFor="password" className="text form-label">Password</label>
                            </fieldset>

                            <button className='button-link button-link-bg_black-2_white'>
                                <span className='button-link_text'>Log in</span>
                            </button>
                            <a href='/signup' className='button-link button-link-bg_white_black_1'>
                                <span className='button-link_text'>Create an account</span>
                            </a>
                        </form>
                    </div>
                </div>
            </div>

            <><Footer/></>
        </div>
    );
}

export default Login;
