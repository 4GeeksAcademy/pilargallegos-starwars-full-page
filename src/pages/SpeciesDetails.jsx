import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import '../styles/SpeciesDetails.css'

export function SpeciesDetails () {
    const {_id} = useParams ();
    const [SpeciesDetails, setSpeciesDetails] = useState (null);

    useEffect (()=>{
        fetch(`https://starwars-databank-server.vercel.app/api/v1/species/${_id}`)
        .then(response=>response.json())
        .then((data)=>setSpeciesDetails(data))
        .catch((error)=>console.error ('Error', error));
    },[_id]);

    if (!SpeciesDetails) return <p>Cargando...</p>

    return (
        <div className="species-details">
            <h1>{SpeciesDetails.name}</h1>
            <img src={SpeciesDetails.image} alt={SpeciesDetails.name} className="card-img" />
            <p>
                {SpeciesDetails.description.split(" ").join(" ")}
            </p>
        </div>
    );
}

