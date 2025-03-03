import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { FavoritesDetails } from "../src/context/Favorites.jsx";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./context/User.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <FavoritesDetails>
          <App />
        </FavoritesDetails>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
