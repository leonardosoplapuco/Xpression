import { useSelector } from 'react-redux';
import './Settings.css';
import { DesactiveLayerBlur } from '../LayerBlur/LayerBlur'
import leo from '../../ChatImg/leo.jpg';

function Settings() {

    // Instancia de la conexion con WebSocket
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
                    // Aqui va la lagica para salir del chat
                    // y redirigir a la pantalla principal
                }
            };
        }
    };

    return(
        <div className="Settings">
            <ul className="SettingsMenu">
                <li>
                    <button className="button-link SettingsMenuButton MyProfileButton active">
                        <span className="button-link_text text">My profile</span>
                    </button>
                </li>
                <li>
                    <button className="button-link SettingsMenuButton MoreInfoButton">
                        <span className="button-link_text text">More info</span>
                    </button>
                </li>
            </ul>

            <div className="MyProfileInfo">
                <div className="Profile">
                    <div className="ProfilePhoto">
                        <img src={leo} alt="" className="ProfilePhotoImg"></img>
                        <input type="file" id="ProfilePhotoImgInput" accept="image/*" />
                        <label htmlFor="ProfilePhotoImgInput" className="ProfilePhotoImgInput" title="Change profile picture">
                            <span className="material-symbols-outlined">edit</span>
                        </label>
                    </div>
                    <div className="ProfileData">
                        <div className="ProfileDataUsername text">{leon}</div>
                        <div className="ProfileDataFullName text">Leonardo Soplapuco</div>
                    </div>
                </div>

                <form className="MyProfileSettings" id="MyProfileSettings">
                    <div className="MyProfileSettingsTarget MyProfileSettingsTarget-1">
                        <span className="material-symbols-outlined MyProfileSettingsTargetIcon">person</span>
                        <span className="MyProfileSettingsSpan">Username</span>
                        <input type="text" id="miInput" placeholder={leon}/>
                    </div>
                    <div className="MyProfileSettingsTarget MyProfileSettingsTarget-2">
                        <span className="material-symbols-outlined MyProfileSettingsTargetIcon">person</span>
                        <span className="MyProfileSettingsSpan">Full name</span>
                        <input type="text" id="miInput" placeholder="Leonardo Soplapuco"/>
                    </div>
                    <div className="MyProfileSettingsTarget MyProfileSettingsTarget-3">
                        <span className="material-symbols-outlined MyProfileSettingsTargetIcon">mail</span>
                        <span className="MyProfileSettingsSpan">Email</span>
                        <input type="text" id="miInput" placeholder="leosoplapuco@bryanyep.com"/>
                    </div>
                    <div className="MyProfileSettingsTarget MyProfileSettingsTarget-4">
                        <span className="material-symbols-outlined  MyProfileSettingsTargetIcon">contrast</span>
                        <span className="MyProfileSettingsSpan">Theme</span>
                        <select onChange={(event) => {
                            console.log('Selected value:', event.target.value); // Log selected value
                            if (event.target.value === 'Light') {
                                DesactiveDarkMode();
                            } else if (event.target.value === 'Dark') {
                                ActiveDarkMode();
                            }
                        }}>
                            <option value="Light">Light</option>
                            <option value="Dark">Dark</option>
                        </select>
                    </div>
                    <div className="MyProfileSettingsTarget MyProfileSettingsTarget-5">
                        <span className="material-symbols-outlined  MyProfileSettingsTargetIcon">translate</span>
                        <span className="MyProfileSettingsSpan">Language</span>
                        <select>
                            <option>English</option>
                            <option>Spanish</option>
                        </select>
                    </div>
                    <button type="submit" className="button-link SettingsCloseButton SafeButton" title="Save">
                        <span className="button-link_text text">Save changes</span>
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
                        <div className="button-link_text text">Sign out</div>
                    </button>
                </li>
                <li>
                    <button className="button-link SettingsCloseButton CloseButton" onClick={() => DesactiveSettings() | DesactiveLayerBlur()} title="Close settings">
                        <span className="button-link_text text">Close</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}

const leon = "leosoplapuco";

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
