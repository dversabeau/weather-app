import './MainLayout.css';
import Search from '../components/Search';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeroBanner from '../components/HeroBanner';
import Prevision from '../components/Prevision';


function MainLayout(props) {

  const [apiData, setApiData] = useState({});
  const [search, setSearch] = useState('Le Mans');


  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?`
    + `q=${search}`
    + `&lang=fr`
    + `&units=metric`
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

  const weatherToday = apiData.list ? apiData.list[0] : '';
  const weatherForcast = apiData ? apiData.list : '';

  return (
    <div>
      <HeroBanner
        weather={weatherToday}
      />
      <Search
        search={search}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      <Prevision
        list={weatherForcast}
      />
    </div>
  )
}

export default MainLayout;