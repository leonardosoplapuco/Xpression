import React from 'react';
import './Login.css'

function Login() {
    return (
        <div className="block-container" id='Login'>
            <form className="login">
                <h2>Xpression</h2>

                <div className="login-section">
                    <label htmlFor="XMPPAddressLogin" className="login-section_icon">
                        <span className="material-symbols-outlined">alternate_email</span>
                    </label>
                    <input type='email' className="login-section_input" id="XMPPAddressLogin" placeholder="XMPP address"></input>
                </div>
                <div className="login-section">
                    <label htmlFor="PasswordLogin" className="login-section_icon">
                        <span className="material-symbols-outlined">lock</span>
                    </label>
                    <input type='password' className="login-section_input" id="PasswordLogin" placeholder="Password"></input>
                </div>

                <button type="submit button-link" className="button-link button-link_bg_blue" id="Login-submit">
                    <span className='button-link_text'>Sign In</span>
                </button>

                <div className="button-link button-link_blue login-signUp_link" onClick={SignUpActive}>
                    <span className='button-link_text'>Create an account</span>
                </div>
            </form>
        </div>
    );
}

function SignUpActive(){
    const signUp = document.querySelector('.signUp-bg');

    signUp.classList.add('active');
}

export default Login;