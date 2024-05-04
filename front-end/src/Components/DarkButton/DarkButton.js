import './DarkButton.css';

function DarkButton() {
    const DarkMode = () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode ? 'true' : 'false');
    };

    document.body.classList.toggle('dark-mode', localStorage.getItem('dark-mode') === 'true');

    return (
        <div className="DarkButton" onClick={DarkMode}>
            <span className="material-symbols-outlined text">contrast</span>
        </div>
    );
}

export default DarkButton;