import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useFavorites } from "./Favorites";

import '../styles/PlanetList.css';

export const PlanetsList = () => {
    const [planets, setPlanets] = useState([]);
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    useEffect(() => {
        fetch('https://www.swapi.tech/api/planets/')
            .then(response => response.json())
            .then((data) => {
              console.log(data); // Verifica la estructura de los datos
              setPlanets(data.results); // Aquí guardamos los planetas
          })            
          .catch((error) => console.error('Error', error));
    }, []);

    const isFavorite = (id) => favorites.some((fav) => fav.id === id);

    return (
        <div className="planet-list">
            <h1>Star Wars Planets</h1>
            <div className="card-container">
                {planets && planets.map((planet) => (
                    <div className="card" key={planet.uid}>
                        <div className="card-content">
                            <h3>{planet.name}</h3> {/* Ahora accedemos directamente a 'name' */}
                            <div className="buttons-content">
                                <Link to={`/planets/${planet.uid}`}>
                                    <Button variant="outline-secondary">Ver detalles</Button>
                                </Link>
                                <Button variant="outline-secondary" onClick={() => isFavorite(planet.uid)
                                    ? removeFavorite(planet.uid)
                                    : addFavorite({ id: planet.uid, name: planet.name, type: 'planets' })
                                }>
                                    {isFavorite(planet.uid) ? "Quitar de Favoritos" : "Favorite"}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
