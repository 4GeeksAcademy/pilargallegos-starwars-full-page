import { useEffect , useState} from "react";
import React from "react";
import { useParams } from "react-router-dom";

export function PlanetDetails () {
    const {planetUid} = useParams();
    const [PlanetDetails , setPlanetDetails] = useState ([]);

    useEffect (()=> {
        fetch (``)
    })
}