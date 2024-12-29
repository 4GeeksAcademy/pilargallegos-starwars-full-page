import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function SpeciesDetails () {
    const {_id} = useParams ();
    const [SpeciesDetails, setSpeciesDetails] = useState ([]);

    useEffect (()=>{
        fetch(`https://starwars-databank-server.vercel.app/api/v1/species/${_id}`)
        .then(response=>response.json())
        .then((data)=>setSpeciesDetails(data.description))
        .catch((error)=>console.error ('Error', error));
    },[_id]);

    if (!SpeciesDetails) return <p>Cargando...</p>

    return(
        <div>
            <h1>{SpeciesDetails.name}</h1>
            <p><strong>Details</strong></p>
            <ul>
                {Object.entries(SpeciesDetails).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key.replace("_", " ")}:</strong>{" "}
                        {Array.isArray(value) ? value.join(" , ") : value.toString()}
                    </li>
                ))}
            </ul>
        </div>
    )
}