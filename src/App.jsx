import React from "react";
import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import { FilmList } from "./pages/FilmList";
import { FilmDetails } from "./pages/FilmDetails";
import { SpeciesList } from "./pages/SpeciesList";
import { SpeciesDetails } from "./pages/SpeciesDetails";
import { PlanetList } from "./pages/PlanetList";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmList />} />
        <Route path="/films/:filmUid" element={<FilmDetails />} />
        <Route path="/species" element={<SpeciesList />} />
        <Route path="/species/:specieUid" element={<SpeciesDetails />} />
        <Route path="/planets" element={<PlanetList />} />

      </Routes>
    </>
  );
}

export default App;
