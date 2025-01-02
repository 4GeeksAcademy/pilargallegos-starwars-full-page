import React from "react";
import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import { FilmList } from "./pages/FilmList";
import { FilmDetails } from "./pages/FilmDetails";
import { SpeciesList } from "./pages/SpeciesList";
import { SpeciesDetails } from "./pages/SpeciesDetails";
import HomePage from "./pages/HomePage";
import { OrganizationsList } from "./pages/OrganizationsList";
import { OrganizationsDetails } from "./pages/OrganizationsDetails";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmList />} />
        <Route path="/films/:filmUid" element={<FilmDetails />} />
        <Route path="/species" element={<SpeciesList />} />
        <Route path="/species/:_id" element={<SpeciesDetails />} />
        <Route path="/organizations" element={<OrganizationsList />} />
        <Route path="/organizations/name/:name" element={<OrganizationsDetails />} />
      </Routes>
    </>
  );
}

export default App;
