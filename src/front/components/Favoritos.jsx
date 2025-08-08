import React, {useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";
import { getUserFavorites } from "../services/userServices.js";


export const Favoritos = () => {
    const { store } = useGlobalReducer();
    const navigate = useNavigate();


     useEffect(() => {
        if (!store.user) {
            navigate("/perfil");
        }
    }, [store.user, navigate]);

    useEffect(() => {
        getUserFavorites(dispatch);
    }, [store.user, dispatch]);

    
    if (!store.user) {
        return null;
    }

    const favoritos = store.favoritos || [];

    return (
        <div className="container mt-4">
            {favoritos.length === 0 ? (
                <p>No tienes favoritos aún.</p>
            ) : (
                <ul className="list-group">
                    {favoritos.map((item) => (
                        <li key={item.id} className="list-group-item">
                            {item.type === "character" && (
                                <>
                                    <strong>Character:</strong> {item.name} - Gender: {item.gender}
                                </>
                            )}
                            {item.type === "planet" && (
                                <>
                                    <strong>Planet:</strong> {item.name} - Terrain: {item.terrain}
                                </>
                            )}
                            {item.type === "vehicle" && (
                                <>
                                    <strong>Vehicle:</strong> {item.name} - Model: {item.model}
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
