import { useEffect , useState} from "react";
import React from "react";
import { useParams } from "react-router-dom";

import '../styles/OrganizationDetails.css'

export function OrganizationsDetails () {
    const {name} = useParams();
    const [OrganizationDetails , setOrganizationDetails] = useState (null);

    useEffect(() => {
        fetch(`https://starwars-databank-server.vercel.app/api/v1/organizations/name/${name}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                if (Array.isArray(data) && data.length > 0) {
                    setOrganizationDetails(data[0]); 
                } else {
                    console.error("La respuesta no contiene un array válido");
                }
            })
            .catch(error => console.error("Error:", error));
    }, [name]);

    if (!OrganizationDetails) return <p>Cargando...</p>
    
        return (
            <div className="organization-details">
                <h1>{OrganizationDetails.name}</h1>
                <img src={OrganizationDetails.image} alt={OrganizationDetails.image} className="card-img" />
                <p>{OrganizationDetails.description}</p>
            </div>
        );
}