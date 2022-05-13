import './Search.css';

function Search(props) {

    const { search, handleInput, handleSubmit } = props;

    return (
        <div>
            <input
                type='text'
                className='search'




                value={search}
                onChange={(e) => handleInput(e)}
            />
            <button onClick={handleSubmit}>
                Rechercher
            </button>

        </div>
    );

}

export default Search