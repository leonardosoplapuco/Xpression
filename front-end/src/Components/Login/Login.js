import React from 'react';
import './Login.css'

function login() {
    return (
        <div className="block-container" id='Login'>
            <form className="login">
                <h2 className='title'>Xpression</h2>

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

export default login;