import { useState } from "react";

export default function Search(props) {
  // const [nameofCity, setNameOfCity] = useState("");
  const [city, setCity] = useState("");

  // const geoApiKey = "3a123655a834444cef356139026ca886";
  // const url = `http://api.openweathermap.org/geo/1.0/direct?q=${nameofCity}&limit=1&appid=${geoApiKey}`;
  // const location = props.getWeatherData;
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameofCity}&appid=${geoApiKey}&units=metric`;
  // useEffect(() => {
  //   console.log("i Run");
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => location(data));
  // }, [nameofCity]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(url);
  //     result.json().then((json) => {
  //       location(json);
  //     });
  //   };
  // }, [nameofCity]);

  // function handleChange(event) {
  //   setCity(event.target.value);
  // }
  // function addName() {
  //   props.setNameOfCity(city);
  //   props.gotData(true);
  // }
  // const setNameOfCity = props.setCity;

  return (
    <div className="container_search">
      <input
        placeholder="Enter a city"
        type="text"
        onChange={(e) => props.setCity(e.target.value)}
        value={props.city}
        onKeyDown={props.getWeatherData}
      />

      {/* <button className="container_search_btn" onClick={() => addName()}>
        Search for a city
      </button> */}
    </div>
  );
}
