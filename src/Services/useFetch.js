import { useState, useLayoutEffect } from "react";
import { geoApiOptions, geoApiUrl } from "./apiServices";

const useLoadOptions = (inputValue) => {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useLayoutEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(
          `${geoApiUrl}/cities?minPopulation=100000&namePrefix=${inputValue}`,
          geoApiOptions
        );
        if (!response.ok) {
          throw new Error("Error fetching options");
        }
        const data = await response.json();
        const mappedOptions = data.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name} ${city.countryCode}`,
        }));
        setOptions(mappedOptions);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchOptions();
  }, [inputValue, geoApiUrl, geoApiOptions]);

  return { options, isLoading, error };
};

export default useLoadOptions;
