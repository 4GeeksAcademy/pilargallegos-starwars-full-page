import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export const PlanetList =()=>{
    const [planets,setplanes] = useState([]);

    useEffect (()=>{
        fetch ('https://www.swapi.tech/api/planets/')
        .then(response=>response.json())
        .then((data)=>{setplanes(data.results)})
        .catch((error)=>console.error('Error', error));
    },[]);

    return (
        <div>
            <h1>Star Wars Planets</h1>
            <ul>
                {planets.map((planet)=>(
                    <li key={planet.uid}>
                        <Link to = {`/planets/${planet.uid}` }> {planet.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    ) 
}