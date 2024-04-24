import './Settings.css';

function Settings() {
    return(
        <div className="SettingsBg">
            <div className="Settings">
                <button className="SettingsClose">
                    <span className="material-symbols-outlined SettingsCloseButton" onClick={SettingsCloseButton}>close</span>
                </button>

                <ul className="SettingsMenu">
                    <li>
                        <button className="SettingsMenuButton SettingsMenuButton_1 active">
                            <span className="material-symbols-outlined button-link_icon">person</span>
                            <span className="button-link_text">Profile</span>
                        </button>
                    </li>
                    <li>
                        <button className="SettingsMenuButton SettingsMenuButton_2">
                            <span className="material-symbols-outlined button-link_icon">palette</span>
                            <span className="button-link_text">Style</span>
                        </button>
                    </li>
                    <li>
                        <button className="SettingsMenuButton SettingsMenuButton_4">
                            <span className="material-symbols-outlined">info</span>
                            <span className="">More info</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function SettingsCloseButton(){
    const SettingsBg = document.querySelector('.SettingsBg');
    SettingsBg.classList.remove('active');
}

export default Settings;