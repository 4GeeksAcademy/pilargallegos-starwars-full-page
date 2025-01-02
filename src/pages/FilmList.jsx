import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import '../styles/FilmList.css';

export const FilmList = () => {
  const [films, setFilms] = useState([]); 

  useEffect(() => {
    fetch('https://www.swapi.tech/api/films/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setFilms(data.result)}) 
      .catch((error) => console.error('Error:', error));
  }, []);

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
              <Button variant="outline-secondary">Favorite</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
