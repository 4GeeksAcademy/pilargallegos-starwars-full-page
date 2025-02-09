import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import '../styles/PlanetDetails.css'

export function PlanetDetails() {
    const { planetUid } = useParams();
    const [planetDetails, setPlanetDetails] = useState(null); 

    useEffect(() => {
        fetch(`https://orange-goggles-5gxvgvx4xw7jh7xpr-3000.app.github.dev/planets/${planetUid}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setPlanetDetails(data.content); 
            })
            .catch((error) => console.error('Error', error));
    }, [planetUid]);

    if (!planetDetails) return <p>Cargando...</p>; 

    return (
        <div className="planet-details">
            <h1>{planetDetails.name}</h1> 
            <p>{planetDetails.gravity}</p>
        </div>
    );
}