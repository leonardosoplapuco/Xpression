import './CreateGroup.css';
import leo from '../../ChatImg/leo.jpg'
import { DesactiveLayerBlur } from '../LayerBlur/LayerBlur';

function CreateGroup() {
    return(
        <div className="CreateGroup">
            <div className="CreateGroupGroupName">
                <span className="CreateGroupGroupNameSpan text">Group name</span>
                <input className="CreateGroupGroupNameInput" type="text" placeholder="Group name"/>
            </div>

            <div className="CreateGroupSearchBar">
                <span className="CreateGroupSearchBarSpan text">Search contacts</span>
                <input className="CreateGroupSearchBarInput text" type="text" placeholder="Search contacts"/>
                <span className="material-symbols-outlined CreateGroupSearchBarIcon">search</span>
            </div>
            
            <div className="CreateGroupContacts">
                <div className="CreateGroupContact">
                    <img src={leo} alt="" className="CreateGroupContactImg"></img>
                    <span className="createGroupContactName text">bryanyep</span>
                </div>
                <div className="CreateGroupContact">
                    <img src={leo} alt="" className="CreateGroupContactImg"></img>
                    <span className="createGroupContactName text">diegonav</span>
                </div>
                <div className="CreateGroupContact">
                    <img src={leo} alt="" className="CreateGroupContactImg"></img>
                    <span className="createGroupContactName text">kevinh</span>
                </div>
                <div className="CreateGroupContact">
                    <img src={leo} alt="" className="CreateGroupContactImg"></img>
                    <span className="createGroupContactName text">leosoplapuco</span>
                </div>
                <div className="CreateGroupContact">
                    <img src={leo} alt="" className="CreateGroupContactImg"></img>
                    <span className="createGroupContactName text">github</span>
                </div>
            </div>

            <div className="CreateGroupButtons">
                <button className="button-link CreateGroupButton CreateGroupButtonCancel" onClick={() => DesactiveCreateGroup() | DesactiveLayerBlur()}>
                    <span className="text">Cancel</span>
                </button>

                <button className="button-link CreateGroupButton CreateGroupButtonCreate">
                    <span className="text">Create group</span>
                </button>
            </div>
        </div>
    );
}

export function ActiveCreateGroup(){
    const CreateGroup = document.querySelector('.CreateGroup');
    CreateGroup.classList.add('active');
}

export function DesactiveCreateGroup(){
    const CreateGroup = document.querySelector('.CreateGroup');
    CreateGroup.classList.remove('active');
}

export default CreateGroup;