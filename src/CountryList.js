import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import classes from "./CountryList.module.css";

const CountryList = ({ loadedCountries }) => {
  return (
    <div className={classes.countrylist}>
      {loadedCountries.map((loadedCountries) => (
        <Link to={`/${loadedCountries.name}`} key={loadedCountries.name}>
          <CountryCard
            flag={loadedCountries.flags.svg}
            name={loadedCountries.name}
            population={loadedCountries.population}
            continent={loadedCountries.region}
            capital={loadedCountries.capital}
          />
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
