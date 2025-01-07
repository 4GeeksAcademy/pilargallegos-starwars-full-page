import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useFavorites } from "../pages/Favorites"

import '../styles/OrganizationsList.css';

export const OrganizationsList = () => {
    const [organizations, setOrganizations] = useState([]);
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    useEffect(() => {
        fetch('https://starwars-databank-server.vercel.app/api/v1/organizations')
            .then(response => response.json())
            .then((data) => setOrganizations(data.data))
            .catch((error) => console.error('Error', error));
    }, []);

    const isFavorite = (id) => favorites.some((fav) => fav.id === id);

    return (
        <div className="organizations-list">
            <h1>Star Wars Organizations</h1>
            <div className="card-container">
                {organizations.map((organization) => (
                    <div className="card" key={organization._id}>
                        <img src={organization.image} alt={organization.image} className="card-img" />
                        <div className="card-content">
                            <h3>{organization.name}</h3>
                            <div className="buttons-content">
                                <Link to={`/organizations/${organization._id}`}>
                                    <Button variant="outline-secondary">Ver detalles</Button>
                                </Link>
                                <Button variant="outline-secondary" onClick={() => isFavorite(organization._id)
                                    ? removeFavorite(organization._id)
                                    : addFavorite({ id: organization._id, name: organization.name, type: 'organizations', })
                                }
                                >
                                    {isFavorite(organization._id) ? "Quitar de Favoritos" : "Favorite"}</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}