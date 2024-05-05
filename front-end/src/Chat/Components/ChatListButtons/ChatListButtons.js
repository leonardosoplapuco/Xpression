import './ChatListButtons.css';
import {ActiveLayerBlur} from '../LayerBlur/LayerBlur';
// import {ActiveAddContact} from '../AddContact/AddContact';
// import {ActiveCreateGroup} from '../CreateGroup/CreateGroup';
import {ActiveSettings} from '../Settings/Settings';

function ChatListButtons() {
    return(
        <ul className="ChatListButtons">
            {/* <li><button onClick={ActiveAddContact}><span className="material-symbols-outlined button-link" title="Add contact" onClick={ActiveLayerBlur}>person_add</span></button></li>
            <li><button onClick={ActiveCreateGroup}><span className="material-symbols-outlined button-link" title="Create a group" onClick={ActiveLayerBlur}>group_add</span></button></li> */}
            <li><button onClick={ActiveSettings}><span className="material-symbols-outlined button-link SettingsButton text" title="Settings" onClick={ActiveLayerBlur}>tune</span></button></li>
        </ul>
    );
}

export default ChatListButtons;