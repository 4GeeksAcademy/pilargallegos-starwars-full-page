import { useEffect , useState} from "react";
import React from "react";
import { useParams } from "react-router-dom";

import '../styles/OrganizationDetails.css'

export function OrganizationsDetails () {
    const { _id } = useParams(); 
    const [OrganizationDetails , setOrganizationDetails] = useState (null);

    useEffect(() => {
        fetch(`https://starwars-databank-server.vercel.app/api/v1/organizations/${_id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                setOrganizationDetails(data); 
                
            })
            .catch(error => console.error("Error:", error));
    }, [_id]);

    if (!OrganizationDetails) return <p>Cargando...</p>
    
        return (
            <div className="organization-details">
                <h1>{OrganizationDetails.name}</h1>
                <img src={OrganizationDetails.image} alt={OrganizationDetails.image} className="card-img" />
                <p>{OrganizationDetails.description}</p>
            </div>
        );
}