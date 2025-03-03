import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

export function FavoritesList() {
    const { favorites, removeFavorite } = useFavorites();
    const navigate = useNavigate();

    const handleRemoveFavorite = (favId) => {
        removeFavorite(favId);
        navigate("/");  
    };

    return (
        <div className="favorites-list">
            <h2>Favoritos</h2>
            {favorites.length === 0 ? (
                <p>No hay favoritos aún.</p>
            ) : (
                <ul>
                    {favorites.map((fav) => (
                        <li key={fav.id}>
                            {fav.name}
                            <button onClick={() => handleRemoveFavorite(fav.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}