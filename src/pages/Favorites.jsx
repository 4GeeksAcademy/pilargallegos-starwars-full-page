import React from "react";
import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesDetails ({children}) {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (element) => { 
        setFavorites ((prevFavorites)=>{
            if (prevFavorites.some ((fav)=> fav.id === element.id)){
                return prevFavorites;
            }
            return [...prevFavorites, element]
        });
    };

    const removeFavorite = (elementId) => {
        setFavorites((prevFavorites)=> 
            prevFavorites.filter((fav)=> fav.id !== elementId)
    );
    };

    return <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite}}>
        {children}
    </FavoritesContext.Provider>
}
export function useFavorites(){
    return useContext(FavoritesContext);
}