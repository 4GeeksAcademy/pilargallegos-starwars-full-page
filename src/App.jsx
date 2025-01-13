import React from "react";
import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";

import { FavoritesDetails } from "./pages/Favorites";
import routes from "./components/RouteConfig";

function App() {
  return (
    <>
    <FavoritesDetails>
      <NavbarComponent />
      <Routes>
        {routes.map((route) => {
          return (
            <Route path={route.path} element={route.element}/>
          );
        })}
      </Routes>
      </FavoritesDetails>
    </>
  );
}

export default App;
