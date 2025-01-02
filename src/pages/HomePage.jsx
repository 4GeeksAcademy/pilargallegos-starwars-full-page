import React from "react";
import { FilmList } from "./FilmList";
import { SpeciesList } from "./SpeciesList";
import { OrganizationsList } from "./OrganizationsList";

const HomePage = () => {
  return (
    <div className="home">
      <h1>Star Wars Universe</h1>
      <div>
        <FilmList />
      </div>
      <div>
        <SpeciesList />
      </div>
      <div>
        <OrganizationsList />
      </div>
    </div>
  );
};

export default HomePage;
