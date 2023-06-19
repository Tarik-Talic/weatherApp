import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Search from "./components/Search";
import { weatherApiUrl, weatherApiKey } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [cityName, setCityName] = useState("");
  const apiKey = "86838db30afdcecfc41346db003194b2";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cityName[0].lat}&lon=${cityName[0].lon}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, [cityName]);
  console.log(weatherData);
  return (
    <div className="App">
      <Header />
      <Search setCityName={setCityName} />
      <Card />
    </div>
  );
}

export default App;
