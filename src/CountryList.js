import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import classes from "./CountryList.module.css";

const CountryList = ({ loadedCountries }) => {
  return (
    <div className={classes.countrylist}>
      {loadedCountries.map((loadedCountries) => (
        <Link
          to={`/${loadedCountries.name.common}`}
          key={loadedCountries.name.common}
        >
          <CountryCard
            flag={loadedCountries.flags.png}
            name={loadedCountries.name.common}
            population={loadedCountries.population}
            continent={loadedCountries.continents}
            capital={loadedCountries.capital}
          />
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
