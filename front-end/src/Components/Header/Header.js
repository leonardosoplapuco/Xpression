import './Header.css';

function Header() {
    return (
        <header>
            <div className="header">
                <h1><a href="/" className="logo">Xpression</a></h1>

                <nav className="menu">
                    <li><h2><a className="link link-1" href="/About">About</a></h2></li>
                    <li><h2><a className="link link-2" href="#">Blog</a></h2></li>
                    <li><h2><a className="link link-3" href="https://github.com/leosoplapuco/Xpression" target="_blank">Source code</a></h2></li>
                    <li><h2><a className="link link-4" href="#FAQ">FAQ</a></h2></li>
                </nav>

                <a className="header-login button-link button-link_bg_white" href="#Login">
                    <span className="button-link_text">Sign In</span>
                    <span className="material-symbols-outlined button-link_icon">person</span>
                </a>

                <div className="menu-icon_container button-link_bg_white" onClick={menuActive}>
                    <span className="material-symbols-outlined hamburguer">menu</span>
                    <span className="material-symbols-outlined hamburguer-close">close</span>
                </div>
            </div>
        </header>
    );
}

function menuActive(){
    const menuIcon = document.querySelector('.menu-icon_container');
    const menu = document.querySelector('.menu');

    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
}

export default Header;