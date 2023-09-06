import './search.scss';

const Search = () => {
    return (
        <div className="search">
            <label className="search__label">Or find a character by name:</label>
            <form className='search__form' action="">
                <input id="search-input" type="text" className="search__input" placeholder='Enter name' />
                <button className='search-btn button button_main-color'>find</button>
            </form>
            <div className="search__block-messaage">
                <div className="search__message search__message_green">There is! Visit page?</div>
                {/* <button className='search-btn button button_grey'>to page</button> */}
            </div>
        </div>
    )
}

export default Search;