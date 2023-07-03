import { useState } from "react";
import "../styles/Card.css";

export default function Card(props) {
  const [style, setStyle] = useState({
    height: "200px",
    width: "200px",
    display: "none",
  });
  const [show, setShow] = useState(false);

  const date = new Date();
  const nameOfMonthUS = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    new Date()
  );
  const currentDay = date.getDate({});
  const currentDate = [currentDay, nameOfMonthUS].join(" ");

  const displayCards = () => {
    if (!show) {
      setShow(true);
      setStyle((prevStyle) => {
        return {
          ...prevStyle,
          display: "block",
        };
      });
    } else {
      setShow(false);
      setStyle((prevStyle) => {
        return {
          ...prevStyle,
          display: "none",
        };
      });
    }
  };

  return (
    <div className="cardContainer">
      <div className="moreInfo" style={style}>
        <label>Feels Like</label>
        <div>{props.feelsLike}</div>
        <label>Temparature Max</label>
        <div>{props.temparatureMax}</div>
        <label>Temparature Min</label>
        <div>{props.temparatureMin}</div>
      </div>

      <div className="card">
        <div className="container">
          <img src={`icons/${props.icon}.png`} />
          <p>{props.description}</p>
        </div>

        <div className="card-header">
          <span>
            {props.cityName}
            <br />
            {props.countryName}
          </span>
          <span>{currentDate}</span>
        </div>

        <span className="temp">{Math.round(props.temparature)}°C</span>

        <div className="temp-scale">
          <span onClick={displayCards}>{show ? "Show Less" : "Show More"}</span>
        </div>
      </div>
      <div className="moreInfo" style={style}>
        <label>Wind Speed</label>
        <div>{props.wind}</div>
        <label>Humidity</label>
        <div>{props.humidity}</div>
        <label>Pressure</label>
        <div>{props.pressure}</div>
      </div>
    </div>
  );
}
