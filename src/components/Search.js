import { useEffect, useState } from "react";

export default function Search(props) {
  const [nameofCity, setNameOfCity] = useState("");
  const [city, setCity] = useState("");

  const geoApiKey = "9a0060434c23a5464a2fe42e9f97f710";
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${nameofCity}&limit=1&appid=${geoApiKey}`;
  const location = props.setCityName;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => location(data));
  }, [nameofCity]);

  function handleChange(event) {
    setCity(event.target.value);
  }
  function addName() {
    setNameOfCity(city);
  }

  return (
    <div className="container_search">
      <input type="text" placeholder="Enter a city" onChange={handleChange} />
      <button className="container_search_btn" onClick={() => addName()}>
        Search for a city
      </button>
    </div>
  );
}
