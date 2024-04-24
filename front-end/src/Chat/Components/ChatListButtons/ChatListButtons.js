import './ChatListButtons.css';

function ChatListButtons() {
    return (
        <ul className="ChatListButtons">
            <li><button><span className="material-symbols-outlined button-link" title="Add contact">person_add</span></button></li>
            <li><button><span className="material-symbols-outlined button-link" title="Create a group">group_add</span></button></li>
            <li><button><span className="material-symbols-outlined button-link SettingsButton" title="Settings" onClick={SettingsButton}>settings</span></button></li>
        </ul>
    );
}

function SettingsButton(){
    const SettingsBg = document.querySelector('.SettingsBg');
    SettingsBg.classList.add('active');
}

export default ChatListButtons;