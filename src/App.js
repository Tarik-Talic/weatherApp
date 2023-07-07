import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Search from "./components/Search";
import ForecastCardContainer from "./components/ForecastCardContainer";

import { weatherApiUrl, weatherApiKey } from "./Services/apiServices";

import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);

  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
  };

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${weatherApiUrl}/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=${weatherApiKey}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setWeatherData({ city: searchData.label, ...weatherResponse });
        setForecastWeatherData({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(forecastWeatherData);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Search onSearchChange={handleOnSearchChange} />
        {!weatherData ? (
          <div className="containerTxt">
            <p className="welcomeTxt">
              Welcome <br />
              to <br />
              Weather App!
            </p>
            <p className="infoTxt">Enter a city to find out the weather information.</p>
          </div>
        ) : (
          <>
            <Card
              weatherData={weatherData}
              cityName={weatherData.name}
              countryName={weatherData.sys.country}
              temparature={weatherData.main.temp}
              temparatureMax={weatherData.main.temp_max}
              temparatureMin={weatherData.main.temp_min}
              icon={weatherData.weather[0].icon}
              feelsLike={weatherData.main.feels_like}
              pressure={weatherData.main.pressure}
              humidity={weatherData.main.humidity}
              wind={weatherData.wind.speed}
            />
            <ForecastCardContainer data={forecastWeatherData} />
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
