import React from "react";
import "../styles/ForecastCard.css";
export default function ForecastCard(props) {
  return (
    <div className="forecastCard">
      <h3>{props.day}</h3>
      <label>
        <span className="maxTemp">{Math.round(props.maxTemp)}°C</span>
        <span className="minTemp">/{Math.round(props.minTemp)}°C</span>
      </label>
      <img alt="weatherIcon" src={`icons/${props.icon}.png`} className="iconImg" />
    </div>
  );
}
