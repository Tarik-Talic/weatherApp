const geoApi = "";

const getWeatherApi = (cityName, geoApiKey, setNameOfCity) => {
  return fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${geoApiKey}`
  )
    .then((res) => res.json())
    .then((data) => setNameOfCity(data));
};
export default getWeatherApi;
