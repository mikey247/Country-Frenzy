import { useEffect, useState } from "react";

const Filter = () => {
  const [region, setRegion] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  const fetchCountryByRegion = (region) => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let currentData = data;
        setIsloading(false);
        setRegion(currentData);
      });
  };

  useEffect(() => {
    fetchCountryByRegion();
    return () => {};
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <select
        name="select"
        id="select"
        value="Filter by regions"
        onChange={(e) => fetchCountryByRegion(e.target.value)}
      >
        <option value="">Search by Region....</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;