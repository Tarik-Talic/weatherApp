import "../styles/Header.css";
import Logo from "../assets/WeatherLogoApp.png";
import Switch from "react-switch";

export default function Header(props) {
  return (
    <div className="nav">
      <div className="toggle_switch">
        <label>{props.theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <Switch onChange={props.toggleTheme} checked={props.theme === "dark"} />
      </div>
      <span className="logo">
        <img src={Logo} />
        <h1>Weather App</h1>
      </span>
    </div>
  );
}
