import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import '../styles/SpeciesDetails.css'

export function SpeciesDetails () {
    const {uid} = useParams ();
    const [SpeciesDetails, setSpeciesDetails] = useState (null);

    useEffect (()=>{
        fetch(`https://orange-goggles-5gxvgvx4xw7jh7xpr-3000.app.github.dev/species/${uid}`)
        .then(response=>response.json())
        .then((data)=>setSpeciesDetails(data.content))
        .catch((error)=>console.error ('Error', error));
    },[uid]);

    if (!SpeciesDetails) return <p>Cargando...</p>

    return (
        <div className="species-details">
            <h1>{SpeciesDetails.name}</h1>
            <p>{SpeciesDetails.uid}</p>
            <img src={SpeciesDetails.image} alt={SpeciesDetails.name} className="card-img" />
            <p>
                {SpeciesDetails.description.split(" ").join(" ")}
            </p>
            <p>{SpeciesDetails.homeworld}</p>
        </div>
    );
}
