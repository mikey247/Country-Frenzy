import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TheCountryInfo from "./TheCountryInfo";

const CountryDetail = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id);

  // const fetchCountryData = async () => {
  //   const res = await fetch(`https://restcountries.com/v3.1/name/${id}`);
  //   const data = await res.json();
  //   const currentData = data[0];
  //   console.log(currentData);
  //   setIsLoading(false);
  //   setCountry(currentData);
  // };

  useEffect(() => {
    // fetchCountryData();
    fetch(`https://restcountries.com/v3.1/name/${id}
    `)
      .then((res) => res.json())
      .then((data) => {
        let currentData = data[0];
        console.log(currentData);
        setIsLoading(false);
        setCountry(currentData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return <>{country && <TheCountryInfo country={country} />}</>;
};

export default CountryDetail;
