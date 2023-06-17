const apiKey = "9a0060434c23a5464a2fe42e9f97f710";
const apiKey2 = "86838db30afdcecfc41346db003194b2";
const formattedWeatherData = async (city) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

  console.log(data);
};

const weatherDataTest = async (lat, lon) => {
  const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey2}`;
  const data = await fetch(url2)
    .then((res) => res.json())
    .then((data) => data);
  console.log(data);
};

export { formattedWeatherData };
export { weatherDataTest };
