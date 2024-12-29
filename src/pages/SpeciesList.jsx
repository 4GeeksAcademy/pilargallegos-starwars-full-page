import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function SpeciesList () {
    const [species, setSpecies] = useState ([]);

    useEffect(()=>{
        fetch ('https://starwars-databank-server.vercel.app/api/v1/species')
        .then(response=>response.json())
        .then((data)=>{if (Array.isArray(data.data)) {
            setSpecies(data.data);
        } else {
            console.error('Los datos no son válidos:', data);
        }
    })
        .catch (error =>console.error('Error', error));
    },[]);

    return (
        <div>
            <h1>Star Wars Species</h1>
            <ul>
                {species.map((specie)=>(
                    <li key={specie.uid}>
                        <Link to = {`/species/${specie.uid}`}>
                        {specie.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}