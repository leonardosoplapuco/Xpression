import '../Login/Login.css'
import './SignUp.css'
import { useState } from 'react';
import axios from 'axios';

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
			email: userAddress,
			password: userPassword,
			
          })
            .then((response) => {
              console.log(response.data);
              alert('POST REQUEST SENT TO API');
            })
            .catch((error) => {
              console.error(error);
              alert('POST REQUEST FAILED');
            });
    }

    return (
        <div className='signUp-bg'>
            <form
                className='login signUp'
                onSubmit={handleSubmit}
            >
                <h2 className="title">Xpression</h2>
                <p>Create a account in our XMPP server</p>

                <div className="login-section">
                    <label htmlFor="Username" className="login-section_icon">
                        <span className="material-symbols-outlined">person</span>
                    </label>
                    <input
                        type="text"
                        className="login-section_input"
                        id="Username"
                        placeholder="Username"
                        value={userName}
                        onChange={handleUserName}
                    />
                </div>
                <div className="login-section">
                    <label htmlFor="XMPPAdrressSignUP" className="login-section_icon">
                        <span className="material-symbols-outlined">alternate_email</span>
                    </label>
                    <input
                        type="email"
                        className="login-section_input"
                        id="XMPPAdrressSignUP"
                        placeholder="username@bryanyep.com"
                        value={userAddress}
                        onChange={handleUserAddress}
                    />
                </div>
                <div className="login-section">
                    <label htmlFor="PasswordSignUp" className="login-section_icon">
                        <span className="material-symbols-outlined">lock</span>
                    </label>
                    <input
                        type="password"
                        className="login-section_input"
                        id="PasswordSignUp"
                        placeholder="Create a password"
                        value={userPassword}
                        onChange={handleUserPassword}
                    />
                </div>
                <div className="login-section">
                    <label htmlFor="PasswordConfirmSignUp" className="login-section_icon">
                        <span className="material-symbols-outlined">lock</span>
                    </label>
                    <input
                        type="password"
                        className="login-section_input"
                        id="PasswordConfirmSignUp"
                        placeholder="Confirm password"
                        value={userPasswordConfirm}
                        onChange={handleUserPasswordConfirm}
                    />
                </div>

                <button type="submit" className="button-link submit" id="SignUpSubmit">
                    <span>SignUp</span>
                </button>

                <a href="/" className="button-link signUp-cancel">
                    <span>Back to home</span>
                </a>
            </form>
        </div>
    );
}

export default SignUp;
