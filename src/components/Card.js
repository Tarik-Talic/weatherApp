import "../styles/Card.css";

export default function Card(props) {
  const date = new Date();
  const nameOfMonthUS = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    new Date()
  );
  const currentDay = date.getDate();

  const currentDate = [currentDay, nameOfMonthUS].join(" ");

  return (
    <div className="card">
      <div className="container">
        <img src={`icons/${props.icon}.png`} />
      </div>

      <div className="card-header">
        <span>
          {props.cityName}
          <br />
          {props.countryName}
        </span>
        <span>{currentDate}</span>
      </div>

      <span className="temp">{Math.round(props.temparature)}°</span>

      <div className="temp-scale">
        <span>Celcius</span>
      </div>
    </div>
  );
}
