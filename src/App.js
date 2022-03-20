import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import Neighbour from "./Neighbour";
import SearchBar from "./SearchBar";

function App() {
  return (
    <>
      <SearchBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CountryDetail />} />
        <Route path="/neighbour/:id" element={<Neighbour />} />
      </Routes>
    </>
  );
}

export default App;
