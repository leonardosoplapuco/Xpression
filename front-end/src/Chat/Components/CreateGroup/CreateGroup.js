import './CreateGroup.css';

function CreateGroup() {
    return(
        <div className="CreateGroup">
            <div className="CreateGroupGroupName">
                <span className="CreateGroupGroupNameSpan text">Group name</span>
                <input className="CreateGroupGroupNameInput" type="text" placeholder="Group name"/>
            </div>

            <div className="CreateGroupSearchBar">
                <span className="CreateGroupSearchBarSpan text">Add contacts</span>
                <input className="CreateGroupSearchBarInput text" type="text" placeholder="Add contacts"/>
            </div>
        </div>
    );
}

export function ActiveCreateGroup(){
    const CreateGroup = document.querySelector('.CreateGroup');
    CreateGroup.classList.add('active');
}

// export function DesactiveCreateGroup(){
//     const CreateGroup = document.querySelector('.CreateGroup');
//     CreateGroup.classList.remove('active');
// }

export default CreateGroup;