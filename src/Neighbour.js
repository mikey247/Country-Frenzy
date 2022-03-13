import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TheCountryInfo from "./TheCountryInfo";

const Neighbour = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${id}
        `)
      .then((res) => res.json())
      .then((data) => {
        let currentData = data;
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

export default Neighbour;
