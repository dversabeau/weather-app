import './MainLayout.css';
import Search from '../components/Search';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeroBanner from '../components/HeroBanner';

function MainLayout(props) {

  const [apiData, setApiData] = useState({});
  const [search, setSearch] = useState('Le Mans');

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}`
    + `&lang=fr`
    + `&appid=${apiKey}`;

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  function getData() {
    axios
      .get(apiUrl)
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData()
  }, []);

  const handleSubmit = () => {
    getData();
  }

  return (
    <div>
      <HeroBanner apiData={apiData} />
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