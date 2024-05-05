import { useState } from 'react';
import axios from 'axios';
import './SignUp.css'
import DarkButton from "../DarkButton/DarkButton";
import LoginImgLight from '../../dist/login-img_light.svg';
import LoginImgDark from '../../dist/login-img_dark.svg';
import Footer from "../Footer/Footer";

function SignUp() {

    const [userName, setUserName] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userPasswordConfirm, setUserPasswordConfirm] = useState('');

    function handleUserName(event) {
        setUserName(event.target.value);
        console.log(userName);
    }

    function handleUserAddress(event) {
        setUserAddress(event.target.value);
        console.log(userAddress);
    }

    function handleUserPassword(event) {
        setUserPassword(event.target.value);
        console.log(userPassword);
    }

    function handleUserPasswordConfirm(event) {
        setUserPasswordConfirm(event.target.value);
        console.log(userPasswordConfirm);
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        alert('ESTOY DENTRO DE HANDLESUBMIT');
        alert(`${userName}\n${userAddress}\n${userPassword}\n${userPasswordConfirm}`);

        if (userName.length > 50) {
            console.error('User name must be 50 characters long or less.');
            return;
        }

        if (userAddress.length > 50) {
            console.error('Address must be 50 characters long or less.');
            return;
        }

        if (userPassword.length > 20) {
            console.error('Password must be 20 characters long or less.');
            return;
        }


        if (userPassword !== userPasswordConfirm) {
            console.error('Passwords don\'t match.');
            return;
        } else {
            alert('PASSWORDS MATCH');
        }


        axios.post('http://127.0.0.1:8000/users/', {
            username: userName,
            address: userAddress,
            password: userPassword,
          })
            .then((response) => {
              console.log(response.data)
              alert('POST REQUEST SENT TO API');
            })
            .catch((error) => {
              console.error(error);
              alert('POST REQUEST FAILED');
            });
    }

    return (
        <div className="SignUp">
            <a className="return-button" href="/">
                <span className="material-symbols-outlined">arrow_back</span>
            </a>

            <><DarkButton/></>

            <div className="block-container" id="SignUp">
                <div className='signup'>
                    <div className='signup-target signup-target_1'>
                        <img src={LoginImgLight} alt="Xpression" className='login-img-light'/>
                        <img src={LoginImgDark} alt="Xpression" className='login-img-dark'/>
                    </div>

                    <div className='signup-target signup-target_2'>
                        <h2 className='subtitle text'>Xpression</h2>
                        <p className='text'>Create an account with us</p>

                        <form
                            className='form login-form'
                            onSubmit={handleSubmit}
                        >
                            <fieldset className='login-form_target'>
                                <span className="material-symbols-outlined form-icon text">person</span>
                                <input
                                    name='username'
                                    type="text"
                                    id='username'
                                    className="form-input text"
                                    title='Username'
                                    placeholder=""
                                    required
                                    value={userName}
                                    onChange={handleUserName}
                                />
                                <label htmlFor="username" className="text form-label">Username</label>
                            </fieldset>
                            <fieldset className='login-form_target'>
                                <span className="material-symbols-outlined form-icon text">alternate_email</span>
                                <input
                                    name='address'
                                    type="email"
                                    id='address'
                                    className="form-input text"
                                    title='Address'
                                    placeholder=""
                                    required
                                    value={userAddress}
                                    onChange={handleUserAddress}
                                />
                                <label htmlFor="address" className="text form-label">Address</label>
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
                            <fieldset className="login-form_target">
                                <span className="material-symbols-outlined form-icon text">lock</span>
                                <input
                                    name='confirm-password'
                                    type="password"
                                    id='confirm-password'
                                    className="form-input text"
                                    title='Confirm password'
                                    placeholder=""
                                    required
                                    value={userPasswordConfirm}
                                    onChange={handleUserPasswordConfirm}
                                />
                                <label htmlFor="confirm-password" className="text form-label">Confirm password</label>
                            </fieldset>

                            <button className='button-link button-link-bg_black-2_white'>
                                <span className='button-link_text'>Sign up</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <><Footer/></>
        </div>
    );
}

export default SignUp;
