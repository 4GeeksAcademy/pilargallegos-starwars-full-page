import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useFavorites } from "../pages/Favorites"

import '../styles/PeopleList.css';

export const PeopleList = () => {
    const [people, setPeople] = useState([]);
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    useEffect(() => {
        fetch('https://orange-goggles-5gxvgvx4xw7jh7xpr-3000.app.github.dev/people/')
            .then(response => response.json())
            .then((data) => setPeople(data.content))
            .catch((error) => console.error('Error', error));
    }, []);

    const isFavorite = (id) => favorites.some((fav) => fav.id === id);

    return (
        <div className="people-list">
            <h1>Star Wars People</h1>
            <div className="card-container">
                {people.map((person) => (
                    <div className="card" key={person.uid}>
                        <img src={person.image} alt={person.image} className="card-img" />
                        <div className="card-content">
                            <h3>{person.name}</h3>
                            <div className="buttons-content">
                            <Link to={`/people/${person.uid}`}>
                                <Button variant="outline-secondary">Ver detalles</Button>
                            </Link>
                                <Button variant="outline-secondary" onClick={() => isFavorite(person.uid)
                                    ? removeFavorite(person.uid)
                                    : addFavorite({ id: person.uid, name: person.name, type: 'person', })
                                }
                                >
                                    {isFavorite(person.uid) ? "Quitar de Favoritos" : "Favorite"}</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}