import "../styles/Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="container">
        <div className="cloud front">
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className="sun"></span>
        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>

      <div className="card-header">
        <span>
          {props.cityName}
          <br />
          {props.countryName}
        </span>
        <span>{props.icon}</span>
      </div>

      <span className="temp">{Math.round(props.temparature)}°</span>

      <div className="temp-scale">
        <span>Celcius</span>
      </div>
    </div>
  );
}
