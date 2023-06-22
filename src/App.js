import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Search from "./components/Search";

import { useEffect, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const apiKey = "3a123655a834444cef356139026ca886";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  // useEffect(() => {
  //   console.log("i Run");
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setWeatherData(data));
  // }, [nameofCity]);

  const getWeatherData = (event) => {
    if (event.key === "Enter") {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        });
      setCity("");
    }
  };
  console.log(weatherData);
  return (
    <div className="App">
      <Header />
      <Search getWeatherData={getWeatherData} setCity={setCity} city={city} />
      {typeof weatherData.main === "undefined" ? (
        <p>Welcome to Weather App!</p>
      ) : (
        <Card
          weatherData={weatherData}
          cityName={weatherData.name}
          countryName={weatherData.sys.country}
          temparature={weatherData.main.temp}
        />
      )}
    </div>
  );
}

export default App;
