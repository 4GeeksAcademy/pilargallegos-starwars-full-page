import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/SpeciesList.css'

export function SpeciesList() {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        fetch('https://starwars-databank-server.vercel.app/api/v1/species')
            .then(response => response.json())
            .then((data) => {
                if (Array.isArray(data.data)) {
                    setSpecies(data.data);
                } else {
                    console.error('Los datos no son válidos:', data);
                }
            })
            .catch(error => console.error('Error', error));
    }, []);

    return (
        <div className="species-list">
            <h2>Star Wars Species</h2>
            <div className="card-container">
                {species.map((specie) => (
                    <div className="card" key={specie._id}>
                         <img src={specie.image} alt={specie.image} className="card-img"/>
                        <div className="card-content">
                            <h3>{specie.name}</h3>
                            <Link to={`/species/${specie._id}`}>
                                <button>Ver más</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}