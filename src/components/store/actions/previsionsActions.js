import axios from "axios";

import { NEW_PREVISION_ACTION } from "./actionTypes";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?`
  + `q=${search}`
  + `&lang=fr`
  + `&units=metric`
  + `&appid=${apiKey}`;

export const getData = () => {
  return (dispatch) => {
    return axios
        .get(apiUrl)
        .then((res) => {
          setApiData(res.data);
        })
        .catch((err) => console.log(err));
  }
}