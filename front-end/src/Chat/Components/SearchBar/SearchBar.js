import './SearchBar.css';

function SearchBar(){
    return(
        <div className="SearchBar">
            <div className='login-form_target'>
                <input name='search-for-a-chat' type="text" id='search-for-a-chat' className="form-input text" title="Search for a chat" placeholder="" required/>
                <label htmlFor="search-for-a-chat" className="text form-label">Search for a chat</label>
            </div>
        </div>
    );
}

export default SearchBar;