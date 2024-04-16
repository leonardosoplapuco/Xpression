import '../../App/App.css';
import './Header.css'

function Header() {
    return (
        <header className="header">
            <h1><a href="/" className="Logo">Xpression</a></h1>

            <nav className="menu">
                <li><h2><a className="link link-1" href="#">About</a></h2></li>
                <li><h2><a className="link link-2" href="#">FAQ</a></h2></li>
                <li><h2><a className="link link-3" href="#">Blog</a></h2></li>
                <li><h2><a className="link link-4" href="#">Source code</a></h2></li>
            </nav>

            <a className="header-login button-link" href="#">
                <span className="button-link_text">Sign In</span>
                <span class="material-symbols-outlined button-link_icon">person</span>
            </a>
        </header>
    );
}

export default Header;