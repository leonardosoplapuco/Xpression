import '../Login/Login.css'
import './SignUp.css'

function SignUp() {
    return (
        <div className='signUp-bg'>
            <form className='login signUp'>
                <h2>Xpression</h2>
                <p>Create a account in our XMPP server</p>

                <div className="login-section">
                    <label htmlFor="Username" className="login-section_icon">
                        <span class="material-symbols-outlined">person</span>
                    </label>
                    <input className="login-section_input" id="Username" placeholder="Username"></input>
                </div>
                <div className="login-section">
                    <label htmlFor="XMPPAdrressSignUP" className="login-section_icon">
                        <span class="material-symbols-outlined">alternate_email</span>
                    </label>
                    <input className="login-section_input" id="XMPPAdrressSignUP" placeholder="username@bryanyep.com"></input>
                </div>
                <div className="login-section">
                    <label htmlFor="PasswordSignUp" className="login-section_icon">
                        <span class="material-symbols-outlined">lock</span>
                    </label>
                    <input className="login-section_input" id="PasswordSignUp" placeholder="Create a password"></input>
                </div>
                <div className="login-section">
                    <label htmlFor="PasswordConfirmSignUp" className="login-section_icon">
                        <span class="material-symbols-outlined">lock</span>
                    </label>
                    <input className="login-section_input" id="PasswordConfirmSignUp" placeholder="Confirm password"></input>
                </div>

                <button type="submit" className="submit button-link" id="SignUpSubmit">Sign Up</button>

                <button className="button-link signUp-cancel">Cancel</button>
            </form>
        </div>
    );
}

export default SignUp;