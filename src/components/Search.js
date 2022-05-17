import './Search.css';

function Search(props) {

    const { search, handleInput, handleSubmit } = props;
    console.log('search', search)

    return (
        <div className='search-body'>
            <input
                placeholder="Nom de ville"
                type='text'
                className='search'
                value={search}
                onChange={(e) => handleInput(e)}
                onKeyUp={(e) => e.key === 'Enter' && handleSubmit(e)}
            />
            <button onClick={handleSubmit}>
                Rechercher
            </button>

        </div>
    );

}

export default Search