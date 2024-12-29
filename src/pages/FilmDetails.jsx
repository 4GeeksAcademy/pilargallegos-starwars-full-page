import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function FilmDetails() {
    const { filmUid } = useParams();
    const [FilmDetails, setFilmDetails] = useState([]);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/films/${filmUid}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setFilmDetails(data.result.properties);
            })
            .catch((error) => console.error('Error', error))
    }, [filmUid]);

    if (!FilmDetails) return <p>Cargando...</p>;

    return (
        <div>
            <h1>{FilmDetails.title}</h1>
            <p><strong>Opening Crawl</strong></p>
            <p>{FilmDetails.opening_crawl}</p>
        </div>
    );

};