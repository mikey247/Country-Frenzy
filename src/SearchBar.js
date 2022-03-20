import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./SearchBar.module.css";
const SearchBar = () => {
  const navigate = useNavigate();
  const countryRef = useRef();

  const searchCountry = (event) => {
    event.preventDefault();
    const searchedCountry = countryRef.current.value;
    navigate(`/${searchedCountry}`);
    countryRef.current.value = "";
  };

  return (
    <>
      <nav className={classes.navbar}>
        <Link to={"/"}>
          <h1>COUNTRY FRENZY</h1>
        </Link>

        <form action="" onSubmit={searchCountry} className={classes.searchForm}>
          <input
            type="text"
            placeholder="Search by Name e.g USA,Nigeria etc."
            ref={countryRef}
          />
          <button>Search</button>
        </form>
      </nav>
    </>
  );
};

export default SearchBar;
