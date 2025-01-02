import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import '../styles/OrganizationsList.css';

export const OrganizationsList = () => {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        fetch('https://starwars-databank-server.vercel.app/api/v1/organizations')
            .then(response => response.json())
            .then((data) => setOrganizations(data.data))
            .catch((error) => console.error('Error', error));
    }, []);

    return (
        <div className="organizations-list">
            <h1>Star Wars Organizations</h1>
            <div className="card-container">
                {organizations.map((organization) => (
                    <div className="card" key={organization.name}>
                        <img src={organization.image} alt={organization.image} className="card-img" />
                        <div className="card-content">
                            <h3>{organization.name}</h3>
                            <div className="buttons-content">
                                <Link to={`/organizations/name/${organization.name}`}>
                                    <Button variant="outline-secondary">Ver detalles</Button>
                                </Link>
                                <Button variant="outline-secondary">Favorite</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}