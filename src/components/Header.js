import "../styles/Header.css";
import Logo from "../assets/WeatherLogoApp.png";

export default function Header() {
  return (
    <div className="nav">
      <img src={Logo} />
      <h1>Weather App</h1>
    </div>
  );
}
