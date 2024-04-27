import '../login/Login.css'
import './SignUp.css'

function SignUp() {
    return (
        <div className='signUp-bg'>
            <form className='login signUp'>
                <h2 className="title">Xpression</h2>
                <p>Create a account in our XMPP server</p>

                <div className="login-section">
                    <label htmlFor="Username" className="login-section_icon">
                        <span className="material-symbols-outlined">person</span>
                    </label>
                    <input type="text" className="login-section_input" id="Username" placeholder="Username"></input>
                </div>
                <div className="login-section">
                    <label htmlFor="XMPPAdrressSignUP" className="login-section_icon">
                        <span className="material-symbols-outlined">alternate_email</span>
                    </label>
                    <input type="email" className="login-section_input" id="XMPPAdrressSignUP" placeholder="username@bryanyep.com"></input>
                </div>
                <div className="login-section">
                    <label htmlFor="PasswordSignUp" className="login-section_icon">
                        <span className="material-symbols-outlined">lock</span>
                    </label>
                    <input type="password" className="login-section_input" id="PasswordSignUp" placeholder="Create a password"></input>
                </div>
                <div className="login-section">
                    <label htmlFor="PasswordConfirmSignUp" className="login-section_icon">
                        <span className="material-symbols-outlined">lock</span>
                    </label>
                    <input type="password" className="login-section_input" id="PasswordConfirmSignUp" placeholder="Confirm password"></input>
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