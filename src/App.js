import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Search from "./components/Search";

import { weatherApiUrl, weatherApiKey } from "./Services/apiServices";

import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const apiKey = "3a123655a834444cef356139026ca886";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        setWeatherData({ city: searchData.label, ...weatherResponse });
        setForecastWeatherData({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(weatherData);

  return (
    <div className="App">
      <Header />
      <Search getWeatherData={getWeatherData} setCity={setCity} city={city} />
      {weatherData.main ? (
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
        />
      )}
    </div>
  );
}

export default App;
