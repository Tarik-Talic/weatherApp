import "../styles/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
export default function Search(props) {
  return (
    <span className="container_search">
      <FontAwesomeIcon icon={faMagnifyingGlassLocation} className="searchIcon" />
      <input
        className="searchInp"
        placeholder="Search for a city..."
        type="text"
        required
        onChange={(e) => props.setCity(e.target.value)}
        value={props.city}
        onKeyDown={props.getWeatherData}
      />
    </span>
  );
}
