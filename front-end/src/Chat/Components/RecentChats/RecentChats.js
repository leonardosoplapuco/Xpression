import './RecentChats.css';
import PhotoProfile from '../../../dist/photo-profile.png';

function RecentChats({ roster, onContactClick, activeContact }) {
    return(
        <div className="RecentChats">
            {roster.map((contact) => (
                <div key={contact} className="RecentChat" onClick={() => onContactClick(contact)}>
                    <div className="RecentChat_Resume">
                        <img src={PhotoProfile} alt="Xpression"/>
                        <div className="RecentChat_Username">{contact}</div>
                    </div>
                    {activeContact === contact && <div className="active"></div>} {/* Agregamos la clase active aquí */}
                </div>
            ))}
        </div>
    );
}

export default RecentChats;
