import React from 'react';
import './Login.css'

function Login() {
    return (
        <div className="block-container" id='Login'>
            <form className="login">
                <h2>Xpression</h2>

                <div className="login-section">
                    <label htmlFor="Username" className="login-section_icon">
                        <span class="material-symbols-outlined">alternate_email</span>
                    </label>
                    <input className="login-section_input" id="Username" placeholder="XMPP address"></input>
                </div>
                <div className="login-section">
                    <label htmlFor="Password" className="login-section_icon">
                        <span class="material-symbols-outlined">lock</span>
                    </label>
                    <input className="login-section_input" id="Password" placeholder="Password"></input>
                </div>

                <button type="submit button-link" className="submit button-link" id="Login-submit">Sign In</button>

                <a href="/" className="button-link login-signUp_link">
                    <span className='button-link_text'>Create an account</span>
                </a>
            </form>
        </div>
    );
}

export default Login;