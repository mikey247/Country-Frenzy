import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import CountryDetail from "./CountryDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact strict path="/:id/*" element={<CountryDetail />} />
    </Routes>
  );
}

export default App;
