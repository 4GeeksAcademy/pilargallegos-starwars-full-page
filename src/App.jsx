import React from "react";
import { Routes, Route } from "react-router-dom";

import { NavbarComponent } from './components/NavbarComponent';

import { FavoritesDetails } from "./context/Favorites";
import routes from "./services/routes/RouteConfig";
import { LoginRedirect } from "./components/routing/LoginRedirect";
import { GuardedRoutes } from "./components/routing/GuardedRoutes";
function App() {
  return (
    <>
    <FavoritesDetails>
      <NavbarComponent />
      <Routes>
        <Route path="/login" element={<LoginRedirect />} />
        <Route element={<GuardedRoutes />}>
          {routes.map((route) => {
            return (
              <Route
                key={route.name}
                path={route.path}
                element={route.component}
              />
            );
          })}
        </Route>
      </Routes>
      </FavoritesDetails>
    </>
  );
}

export default App;
