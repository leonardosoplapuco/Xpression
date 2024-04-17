import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <nav className="footer-menu">
                <ul>
                    <li><div>Contacto</div></li>
                    <li><div>Términos y Condiciones</div></li>
                    <li><div>Política de Privacidad</div></li>
                    <li><div>Mapa del Sitio</div></li>
                </ul>
            </nav>
            <div className="footer-info">
                <p>&copy; 2024 Xpression. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
