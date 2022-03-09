import React from "react";

import classes from "./CountryDetail.module.css";

const TheCountryInfo = ({ country }) => {
  return (
    <>
      <section>
        <div className={classes.countryDetailContainer}>
          <div className={classes.leftDetail}>
            <img
              src={country.flags.png}
              alt={country.name.common}
              className={classes.detailFlag}
            />
          </div>

          <div className={classes.rightDetail}>
            <h1>{country.name.common}</h1>
            <div className={classes.countrySpecifics}>
              <div>
                <h4>Native Name{}</h4>
                <h4>Population{country.population}</h4>
                <h4>Region{country.continents}</h4>
                <h4>Sub-Region{country.subregion}</h4>
                <h4>Capital{country.capital}</h4>
              </div>
              <div>
                <h4>Top level domain{country.tld[0]}</h4>
                <h4>Currencies{}</h4>
                <h4>Languages{}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheCountryInfo;
