import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Star Wars Filmography</h1>
      <ul>
        {films.map((film) => (
          <li key={film.title}>
            <Link to={`/films/${film.uid}`}>{film.properties.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
