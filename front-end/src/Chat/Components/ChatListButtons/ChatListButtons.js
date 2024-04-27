import './ChatListButtons.css';
import {ActiveLayerBlur} from '../LayerBlur/LayerBlur';
import {ActiveSettings} from '../Settings/Settings';

function ChatListButtons() {
    return(
        <ul className="ChatListButtons">
            <li><button><span className="material-symbols-outlined button-link" title="Add contact">person_add</span></button></li>
            <li><button><span className="material-symbols-outlined button-link" title="Create a group">group_add</span></button></li>
            <li><button onClick={ActiveSettings}><span className="material-symbols-outlined button-link SettingsButton" title="Settings" onClick={ActiveLayerBlur}>tune</span></button></li>
        </ul>
    );
}

export default ChatListButtons;