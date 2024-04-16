import './Login.css'

function Login() {
    return (
        <div className="block-container">
            <form className="login">
                <h2>Xpression</h2>
                <div className="login-section">
                    <label htmlFor="Username" className="login-section_icon">
                        <span class="material-symbols-outlined">alternate_email</span>
                    </label>
                    <input class="login-section_input" id="Username" placeholder="XMPP address"></input>
                </div>
                <div className="login-section">
                    <label htmlFor="Password" className="login-section_icon">
                        <span class="material-symbols-outlined">lock</span>
                    </label>
                    <input class="login-section_input" id="Password" placeholder="Password"></input>
                </div>
                <button type="submit" class="submit" id="Login-submit">Sign In</button>
                <a href="/" class="button-link login-signUp_link">Sign Up</a>
            </form>
        </div>
    );
}

export default Login;