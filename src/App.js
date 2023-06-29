import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Search from "./components/Search";

import { useState } from "react";
// test

function App() {
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const apiKey = "3a123655a834444cef356139026ca886";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
      {!weatherData.main ? (
        <div className="containerTxt">
          <p className="welcomeTxt">
            Welcome <br />
            to <br />
            Weather App!
          </p>
          <p className="infoTxt">Enter a city to find out the weather information.</p>
        </div>
      ) : (
        <Card
          weatherData={weatherData}
          cityName={weatherData.name}
          countryName={weatherData.sys.country}
          temparature={weatherData.main.temp}
          icon={weatherData.weather[0].icon}
          description={weatherData.weather[0].description}
        />
      )}
    </div>
  );
}

export default App;
