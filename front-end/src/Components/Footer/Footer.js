import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <nav className="footer-menu">
                <ul>
                    <li><a href='#'>Contacto</a></li>
                    <li><a href='#'>Términos y Condiciones</a></li>
                    <li><a href='#'>Política de Privacidad</a></li>
                </ul>
            </nav>
            <div className="footer-info">
                <p>&copy; 2024 Xpression - Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
