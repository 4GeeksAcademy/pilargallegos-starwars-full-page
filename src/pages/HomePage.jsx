import React from "react";
import { PlanetsList } from "../lists/PlanetsList";
import { SpeciesList } from "../lists/SpeciesList";
import { PeopleList } from "../lists/PeopleList";

import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <h1>Star Wars Universe</h1>
      <div>
        <PlanetsList />
      </div>
      <div>
        <SpeciesList />
      </div>
      <div>
        <PeopleList />
      </div>
    </div>
  );
};

export default HomePage;
