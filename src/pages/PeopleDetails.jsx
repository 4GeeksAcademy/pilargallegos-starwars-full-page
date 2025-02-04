import { useEffect , useState} from "react";
import React from "react";
import { useParams } from "react-router-dom";

import '../styles/PeopleDetails.css'

export function PeopleDetails () {
    const { _id } = useParams(); 
    const [PeopleDetails , setPeopleDetails] = useState (null);

    useEffect (()=>{
            fetch(`https://starwars-databank-server.vercel.app/api/v1/characters/${_id}`)
            .then(response=>response.json())
            .then((data)=>setPeopleDetails(data))
            .catch((error)=>console.error ('Error', error));
        },[_id]);
    

    if (!PeopleDetails) return <p>Cargando...</p>
    
        return (
            <div className="people-details">
                <h1>{PeopleDetails.name}</h1>
                <img src={PeopleDetails.image} alt={PeopleDetails.name} className="card-img" />
                <p>{PeopleDetails.description}</p>
            </div>
        );
}