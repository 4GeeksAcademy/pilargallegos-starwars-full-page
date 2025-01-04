import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { FavoritesDetails } from "./pages/Favorites";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <FavoritesDetails>
      <App />
    </FavoritesDetails>
  </BrowserRouter>,
);
