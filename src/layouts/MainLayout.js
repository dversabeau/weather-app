import './MainLayout.css';
import Search from '../components/Search';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeroBanner from '../components/HeroBanner';
import Prevision from '../components/Prevision';
import { useDispatch, useSelector } from 'react-redux';
import { setApiData } from "../feature/apiData.slice";
import { setSearch } from "../feature/search.slice";


function MainLayout() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search)

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?`
    + `q=${search}`
    + `&lang=fr`
    + `&units=metric`
    + `&appid=${apiKey}`;

  function getData() {
    axios
      .get(apiUrl)
      .then((res) => dispatch(setApiData(res.data)))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
    dispatch(setSearch(''));
  }, []);


  return (
    <div>
      <HeroBanner />
      <Search
        getData={getData}
      />
      <Prevision />
    </div>
  )
}

export default MainLayout;