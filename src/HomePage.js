import { useState, useEffect } from "react";
import CountryList from "./CountryList";
const HomePage = () => {
  const [isLoading, setIsloading] = useState(true);
  const [loadedCountries, setLoadedCountries] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then((response) => response.json())
      .then((data) => {
        let currentData = data;
        console.log(currentData);
        setIsloading(false);
        setLoadedCountries(currentData);
      });
  }, []);

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return (
    <div>
      {loadedCountries && <CountryList loadedCountries={loadedCountries} />}
    </div>
  );
};

export default HomePage;
