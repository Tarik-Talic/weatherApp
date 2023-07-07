import React from "react";
import ForecastCard from "./ForecastCard";
import "../styles/ForecastCardContainer.css";

function ForecastCardContainer(props) {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayInAWeek = new Date().getDay();
  const forecastDays = weekDays
    .slice(dayInAWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInAWeek));
  let forecastWeatherElements = props.data.list.map((item, idx) => {
    return (
      <ForecastCard
        key={idx}
        day={forecastDays[idx]}
        maxTemp={item.main.temp_max}
        minTemp={item.main.temp_min}
        icon={item.weather[0].icon}
      />
    );
  });

  return (
    <>
      <h2>Forecast for 5 Days</h2>
      <div className="forecastContainer">{forecastWeatherElements}</div>
    </>
  );
}

export default ForecastCardContainer;
