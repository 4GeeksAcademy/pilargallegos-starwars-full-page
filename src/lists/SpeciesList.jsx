import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useFavorites } from "../pages/Favorites";

import '../styles/SpeciesList.css'

export function SpeciesList() {
    const [species, setSpecies] = useState([]);
    const { favorites, addFavorite, removeFavorite } = useFavorites();


    useEffect(() => {
        fetch('https://orange-goggles-5gxvgvx4xw7jh7xpr-3000.app.github.dev/species')
            .then(response => response.json())
            .then((data) => {
                if (Array.isArray(data.content)) {
                    setSpecies(data.content);
                } else {
                    console.error('Los datos no son válidos:', data);
                }
            })
            .catch(error => console.error('Error', error));
    }, []);

    const isFavorite = (id) => favorites.some((fav) => fav.id === id);

    return (
        <div className="species-list">
            <h1>Star Wars Species</h1>
            <div className="card-container">
                {species.map((specie) => (
                    <div className="card" key={specie.uid}>
                        <img src={specie.image} alt={specie.image} className="card-img" />
                        <div className="card-content">
                            <h3>{specie.name}</h3>
                            <div className="buttons-content">
                                <Link to={`/species/${specie.uid}`}>
                                    <Button variant="outline-secondary">Ver detalles</Button>
                                </Link>
                                <Button variant="outline-secondary" onClick={() => isFavorite(specie.uid)
                                    ? removeFavorite(specie.uid)
                                    : addFavorite({ id: specie.uid, name: specie.name, type: 'species', })
                                }
                                >
                                    {isFavorite(specie.uid) ? "Quitar de Favoritos" : "Favorite"}</Button>                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}