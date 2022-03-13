import React from "react";
import { Link } from "react-router-dom";

import classes from "./CountryDetail.module.css";

const TheCountryInfo = ({ country }) => {
  return (
    <>
      <section>
        <div className={classes.countryDetailContainer}>
          <div className={classes.leftDetail}>
            <img
              src={country.flags.svg}
              alt={country.name}
              className={classes.detailFlag}
            />
          </div>

          <div className={classes.rightDetail}>
            <h1 className={classes.countryName}>{country.name}</h1>
            <div className={classes.countrySpecifics}>
              <div>
                <h4>Native Name: {country.nativeName}</h4>
                <h4>Population: {country.population}</h4>
                <h4>Region: {country.region}</h4>
                <h4>Sub-Region: {country.subregion}</h4>
                <h4>Capital: {country.capital}</h4>
              </div>
              <div>
                <h4>Top level domain: {country.topLevelDomain}</h4>
                <h4>
                  Currencies: {country.currencies.map((i) => ` ${i.name}    `)}
                </h4>
                <h4>
                  Languages: {country.languages.map((i) => ` ${i.name}    `)}
                </h4>
              </div>
            </div>

            <div className={classes.neighbour}>
              <h4>Neighbours</h4>

              <div className={classes.neighbourlinks}>
                {country.borders ? (
                  country.borders.map((neighbour) => (
                    <Link to={`/neighbour/${neighbour}`}>{neighbour}</Link>
                  ))
                ) : (
                  <p>No neigbor</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheCountryInfo;
