import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geo_api_url, geoApiOptions } from "../api";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${geo_api_url}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return {
          options: res.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode} `,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
}
