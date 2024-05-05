import { DesactiveLayerBlur } from '../LayerBlur/LayerBlur';
import leo from '../../ChatImg/leo.jpg'
import './AddContact.css';

function AddContact() {
    return(
        <div className="AddContact">
            <input className="AddContactInput" id="AddContactInput" placeholder="Search for an xmpp contact" />
            <ul className="ResultsAddContact">
                <li className="ResultAddContact active">
                    <img src={leo} alt=""></img>
                    <p className="text">bryanyep</p>
                </li>
                <li className="ResultAddContact">
                    <img src={leo} alt=""></img>
                    <p className="text">diegonave</p>
                </li>
            </ul>
            <div className="AddContactButtons">
                <button className="button-link AddContactButton CloseAddContact" onClick={() => DesactiveAddContact() | DesactiveLayerBlur()}>
                    <span className="text">Close</span>
                </button>
                <button className="button-link AddContactButton AddContactEject">
                    <span className="text">Add contact</span>
                </button>
            </div>
        </div>
    );
}

export function ActiveAddContact(){
    const AddContact = document.querySelector('.AddContact');
    AddContact.classList.add('active')
}

export function DesactiveAddContact(){
    const AddContact = document.querySelector('.AddContact');
    AddContact.classList.remove('active')
}

export default AddContact;