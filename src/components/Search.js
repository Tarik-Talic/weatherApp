import { useState } from "react";
import "../styles/Search.css";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiUrl, geoApiOptions } from "../Services/apiServices";
import useLoadOptions from "../Services/useFetch";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  // const loadOptions = useLoadOptions(search);

  const loadOptions = (inputValue) => {
    return fetch(
      `${geoApiUrl}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude} `,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  function handleOnChange(searchData) {
    setSearch(searchData);
    onSearchChange(searchData);
  }
  return (
    <span className="container_search">
      <AsyncPaginate
        placeholder="Search for a city ..."
        debounceTimeout={1000}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </span>
  );
}
