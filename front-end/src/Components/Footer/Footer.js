import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <nav className="footer-menu">
                <ul>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Terms and conditions</a></li>
                    <li><a href='#'>Privacy policy</a></li>
                </ul>
            </nav>
            <div className="footer-info">
                <p>&copy; 2024 Xpression - All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
