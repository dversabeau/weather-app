import './MainLayout.css';
import Search from '../components/Search';
import { useEffect, useState } from 'react';
import axios from 'axios'

function MainLayout(props) {

  const [apiData, setApiData] = useState({});
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState('Le Mans');
  // const [getSearch, setGetSearch] = useState('Le Mans');

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}`
    + `&lang=fr`
    + `&appid=${apiKey}`;

  // Change state Form
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  // const handleInput = (e) => {
  //   setGetSearch(e.target.value);
  // }

  function getData() {
    axios
      .get(apiUrl)
      .then((res) => {
        // console.log("test1", search)
        setApiData(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (!mounted) {
      console.log("test1", search)
      getData()
      setMounted(true)
    }
  }, [mounted]);

  const handleSubmit = () => {
    // setSearch(getSearch);
    getData();
    console.log('handleSubmit', search)
  }

  return (
    <div>
      <Search
        search={search}
        handleInput={handleInput}
        handleSubmit={handleSubmit} />
        
      <p>
        {apiData.weather && apiData.weather[0].description}
      </p>
    </div>
  )
}

export default MainLayout;