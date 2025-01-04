import React from "react";
import { useFavorites } from "../context/FavoritesContext";

export function FavoritesList() {
    const { favorites, removeFavorite } = useFavorites();

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
                            <button onClick={() => removeFavorite(fav.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}import React from "react";
import { useFavorites } from "../context/FavoritesContext";

export function FavoritesList() {
    const { favorites, removeFavorite } = useFavorites();

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
                            <button onClick={() => removeFavorite(fav.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
