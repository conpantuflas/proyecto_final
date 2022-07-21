import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Favoritos.css";
import FavoritosCartasLista from "./FavoritosCarasLista";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FavoritosCartas = (props) => {
  return (
    <>
      {/* CONTENEDOR DE CARTA */}
      <div className="card-fav">
        <img src={props.imagen} />
        {/* CUERPO CARTA */}
        <div className="card-body">
          {/* TITULO */}
          <div className="card-titulo-info">
            <h4 className="card-title">{props.titulo}</h4>
            {/* LISTA EN GRUPO */}
            <FavoritosCartasLista
              paso_a_paso={props.paso_a_paso}
              ingredientes={props.ingredientes}
            />
          </div>
          {/* BOTONES */}
          <div className="card-botones">
            <a href="#!" className="btn btn-outline-secondary rounded-0">
              Quitar de favoritos
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoritosCartas;
