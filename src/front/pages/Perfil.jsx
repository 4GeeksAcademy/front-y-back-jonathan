import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Favoritos } from "../components/Favoritos.jsx";

export const Perfil = () => {

  const {store, dispatch} =useGlobalReducer()

    return (
        <div className="text-center mt-5">
            <h1>Favorites</h1>
             <Favoritos/>
        </div>
    );
}; 