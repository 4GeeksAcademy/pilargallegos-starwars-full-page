import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export const OrganizationsList =()=>{
    const [organizations,setOrganizations] = useState([]);

    useEffect (()=>{
        fetch ('https://starwars-databank-server.vercel.app/api/v1/organizations')
        .then(response=>response.json())
        .then((data)=>setOrganizations(data.data))
        .catch((error)=>console.error('Error', error));
    },[]);

    return (
        <div>
            <h2>Star Wars Organizations</h2>
            <ul>
                {organizations.map((organization)=>(
                    <li key={organization.name}>
                        <Link to = {`/organizations/name/${organization.name}`}> {organization.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    ) 
}