import axios from 'axios';
import {
  FETCH_WEATHER
} from './types';

const API_KEY = 'a748292b96af78dfebf9b817e9f8ad27'

export const fetchWeather= term => async dispatch => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${term},us&appid=${API_KEY}`
  const res = await axios.get(url);
  dispatch({ type: FETCH_WEATHER, payload: res.data });
}
