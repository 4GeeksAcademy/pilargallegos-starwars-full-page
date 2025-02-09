import { useEffect , useState} from "react";
import React from "react";
import { useParams } from "react-router-dom";

import '../styles/PeopleDetails.css'

export function PeopleDetails () {
    const { uid } = useParams(); 
    const [PeopleDetails , setPeopleDetails] = useState (null);

    useEffect(() => {
        if (!uid) {
            console.error("El uid no está disponible.");
            return;  // Detener la ejecución si uid es undefined
        }
        fetch(`https://orange-goggles-5gxvgvx4xw7jh7xpr-3000.app.github.dev/people/${uid}`)
            .then(response => response.json())
            .then((data) => setPeopleDetails(data.content))
            .catch((error) => console.error('Error', error));
    }, [uid]);
    
    

    if (!PeopleDetails) return <p>Cargando...</p>
    
        return (
            <div className="people-details">
                <h1>{PeopleDetails.name}</h1>
                <img src={PeopleDetails.image} alt={PeopleDetails.name} className="card-img" />
                <p>{PeopleDetails.description}</p>
                <p>{PeopleDetails.homeworld}</p>
            </div>
        );
}