import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Settings.css';
import { DesactiveLayerBlur } from '../LayerBlur/LayerBlur'

function Settings() {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [theme, setTheme] = useState(false);

    function handleUserName(event) {
        setUserName(event.target.value);
    }

    function handleFullName(event) {
        setFullName(event.target.value);
    }

    function handleAddress(event) {
        setAddress(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem('username', userName);
        localStorage.setItem('fullname', fullName);
        localStorage.setItem('address', address);
        localStorage.setItem('dark-mode', theme);
    };

    useEffect(() => {
        setUserName(localStorage.getItem('username') || '');
        setFullName(localStorage.getItem('fullname') || '');
        setAddress(localStorage.getItem('address') || '');
        setTheme(localStorage.getItem('dark-mode') || false);
    }, []);

    const socket = useSelector(state => state.socket.socket);

    const signOut = (event) => {
        event.preventDefault();
        if (socket) {
            socket.send(JSON.stringify({
                'type': 'logout_request',
            }));
            socket.onmessage = (event) => {
                const message = JSON.parse(event.data);
                console.log('Received message:', message);

                if (message.type === 'xmpp_logout') {
                    alert('Cerrando sesión\n¡Gracias por usar Xpression!');
                    navigate('/');
                }
            };
        }
    };

    return(
        <div className="Settings">
            <ul className="SettingsMenu">
                <li>
                    <div className="MyProfileButton">
                        <span className="button-link_text text title">Tu perfil</span>
                    </div>
                </li>
            </ul>

            <div className="MyProfileInfo">
                <form
                    className="MyProfileSettings"
                    id="MyProfileSettings"
                    onSubmit={handleSubmit}
                >
                    <div className="MyProfileSettingsTarget MyProfileSettingsTarget-1">
                        <span className="material-symbols-outlined MyProfileSettingsTargetIcon">person</span>
                        <span className="MyProfileSettingsSpan">Cambiar nombre de usuario</span>
                        <input
                            type="text"
                            id="miInput"
                            placeholder={userName}
                            value={userName}
                            onChange={handleUserName}
                        />
                    </div>
                    <div className="MyProfileSettingsTarget MyProfileSettingsTarget-2">
                        <span className="material-symbols-outlined MyProfileSettingsTargetIcon">person</span>
                        <span className="MyProfileSettingsSpan">Nombre completo</span>
                        <input
                          type="text"
                          id="miInput"
                          placeholder={fullName}
                          value={fullName}
                          onChange={handleFullName}
                        />
                    </div>
                    <div className="MyProfileSettingsTarget MyProfileSettingsTarget-3">
                        <span className="material-symbols-outlined MyProfileSettingsTargetIcon">alternate_email</span>
                        <span className="MyProfileSettingsSpan">Correo alternativo</span>
                        <input
                            type="text"
                            id="miInput"
                            placeholder={address}
                            value={address}
                            onChange={handleAddress}
                        />
                    </div>
                    <div className="MyProfileSettingsTarget MyProfileSettingsTarget-4">
                        <span className="material-symbols-outlined  MyProfileSettingsTargetIcon">contrast</span>
                        <span className="MyProfileSettingsSpan">Tema</span>
                        <select onChange={(event) => {
                            console.log('Selected value:', event.target.value);
                            if (event.target.value === 'Light') {
                                DesactiveDarkMode();
                                setTheme(false);
                            } else if (event.target.value === 'Dark') {
                                ActiveDarkMode();
                                setTheme(true);
                            }
                        }}>
                            <option value="Light">Claro</option>
                            <option value="Dark">Oscuro</option>
                        </select>
                    </div>
                    <button type="submit" className="button-link SettingsCloseButton SafeButton" title="Save">
                        <span className="button-link_text text">Guardar cambios</span>
                    </button>
                </form>
            </div>

            <ul className="SettingsClose">
                <li>
                    <button
                        className="button-link SettingsCloseButton SignOutButton"
                        title="Sign out"
                        onClick={signOut}
                    >
                        <div className="button-link_text text">Cerrar sesión</div>
                    </button>
                </li>
                <li>
                    <button className="button-link SettingsCloseButton CloseButton" onClick={() => DesactiveSettings() | DesactiveLayerBlur()} title="Close settings">
                        <span className="button-link_text text">Cerrar</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export function ActiveSettings(){
    const Settings = document.querySelector('.Settings');
    Settings.classList.add('active');
}

export function DesactiveSettings(){
    const Settings = document.querySelector('.Settings');
    Settings.classList.remove('active');
}

export function ActiveDarkMode(){
    const body = document.querySelector('body');
    body.classList.add('dark-mode');
}
  
export function DesactiveDarkMode(){
    const body = document.querySelector('body');
    body.classList.remove('dark-mode');
}

export default Settings;
