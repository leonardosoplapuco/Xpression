import './SignUp.css'
import DarkButton from "../DarkButton/DarkButton";
import LoginImgLight from '../../dist/login-img_light.svg';
import LoginImgDark from '../../dist/login-img_dark.svg';
import Footer from "../Footer/Footer";

function SignUp(){
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

                        <form className='form login-form'>
                            <fieldset className='login-form_target'>
                                <span className="material-symbols-outlined form-icon text">person</span>
                                <input name='username' type="text" id='username' className="form-input text" title='Username' placeholder="" required/>
                                <label htmlFor="username" className="text form-label">Username</label>
                            </fieldset>
                            <fieldset className="login-form_target">
                                <span className="material-symbols-outlined form-icon text">lock</span>
                                <input name='password' type="password" id='password' className="form-input text" title='Password' placeholder="" required/>
                                <label htmlFor="password" className="text form-label">Password</label>
                            </fieldset>
                            <fieldset className="login-form_target">
                                <span className="material-symbols-outlined form-icon text">lock</span>
                                <input name='confirm-password' type="password" id='confirm-password' className="form-input text" title='Confirm password' placeholder="" required/>
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