import "../styles/Header.css";
import Logo from "../assets/WeatherLogoApp.png";
import Switch from "react-switch";

export default function Header(props) {
  return (
    <div className="nav">
      <Switch onChange={props.toggleTheme} checked={props.theme === "dark"} />
      <img src={Logo} />
      <h1>Weather App</h1>
    </div>
  );
}
