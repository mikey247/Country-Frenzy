import classes from "./CountryCard.module.css";

const CountryCard = (props) => {
  return (
    <div className={classes.countryCard}>
      <img src={props.flag} alt="flag" className={classes.flag} />
      <div className={classes.innerCard}>
        <h4>{props.name}</h4>
        <h5>Population: {props.population}</h5>
        <h5>Continen: {props.continent}</h5>
        <h5>Capital: {props.capital}</h5>
      </div>
    </div>
  );
};

export default CountryCard;
