import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import '../styles/PlanetDetails.css'

export function PlanetDetails() {
    const { planetUid } = useParams();
    const [planetDetails, setPlanetDetails] = useState(null); 

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${planetUid}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setPlanetDetails(data.result.properties); 
            })
            .catch((error) => console.error('Error', error));
    }, [planetUid]);

    if (!planetDetails) return <p>Cargando...</p>; 

    return (
        <div className="planet-details">
            <h1>{planetDetails.name}</h1> 
            <p>{planetDetails.climate}</p>
            <p>{planetDetails.gravity}</p>
            <p>{planetDetails.population}</p>
            <p>{planetDetails.diameter}</p>
        </div>
    );
}