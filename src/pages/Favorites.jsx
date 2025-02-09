import React, { useEffect, useState, createContext, useContext } from "react";

const FavoritesContext = createContext();

export function FavoritesDetails({ children }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch("https://orange-goggles-5gxvgvx4xw7jh7xpr-3000.app.github.dev/favorites")
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data.content)) {
                    setFavorites(data.content);
                } else {
                    console.error("La respuesta no es un array:", data);
                    setFavorites([]);
                }
            })
            .catch((error) => {
                console.error("Error al cargar favoritos:", error);
            });
    }, []);

    const addFavorite = (element) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some((fav) => fav.id === element.id)) {
                return prevFavorites;
            }
            return [...prevFavorites, element];
        });

        fetch("https://orange-goggles-5gxvgvx4xw7jh7xpr-3000.app.github.dev/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                external_id: element.id,
                type: element.type,
                name: element.name,
            }),
        });
    };

    const removeFavorite = (elementId) => {
        setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== elementId));
        console.log("Eliminando favorito con id:", elementId);

        fetch(`https://orange-goggles-5gxvgvx4xw7jh7xpr-3000.app.github.dev/favorites/${elementId}`, {
            method: "DELETE",
        }).catch((error) => {
            console.error("Error al eliminar favorito:", error);
        });
    };

    return <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
        {children}
    </FavoritesContext.Provider>;
}

export function useFavorites() {
    return useContext(FavoritesContext);
}
