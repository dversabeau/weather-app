import { useDispatch, useSelector } from 'react-redux';
import './Search.css';
import { setSearch } from "../feature/search.slice";


function Search(props) {

    const dispatch = useDispatch();
    const {getData} = props;
    const search = useSelector((state => state.search.search));

    const handleInput = (e) => {
        dispatch(setSearch(e.target.value));
    };

    const handleSubmit = () => {
        getData();
        dispatch(setSearch(''));
    }

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