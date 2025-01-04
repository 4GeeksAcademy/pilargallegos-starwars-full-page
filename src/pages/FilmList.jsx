import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useFavorites } from "./Favorites";

import '../styles/FilmList.css';

export const FilmList = () => {
  const [films, setFilms] = useState([]);
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    fetch('https://www.swapi.tech/api/films/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setFilms(data.result)
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return (
    <div className="film-list">
      <h1>Star Wars Filmography</h1>
      <div className="film-card-container">
        {films.map((film) => (
          <div className="film-card" key={film.title}>
            <div className="film-card-content">
              <h3>{film.properties.title}</h3>
              <p>{film.properties.opening_crawl.slice(0, 100)}...</p>
              <div className="buttons-content">
                <Link to={`/films/${film.uid}`} className="card-link">
                  <Button variant="outline-secondary">Ver detalles</Button>
                </Link>
                <Button
                  variant="outline-secondary"
                  onClick={() =>
                    isFavorite(film.uid)
                      ? removeFavorite(film.uid)
                      : addFavorite({ id: film.uid, name: film.properties.title })
                  }
                >
                  {isFavorite(film.uid) ? "Quitar de Favoritos" : "Favorite"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
