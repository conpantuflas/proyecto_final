import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Favoritos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FavoritosCartasLista = (props) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="fav-list-container row">
        <div className="list-group" id="list-tab" role="tablist">
          <a
            className={
              "list-group-item list-group-item-action " +
              (toggleState === 1 ? "active" : "")
            }
            id="list-preparacion-list"
            data-bs-toggle="list"
            href="#list-preparacion"
            role="tab"
            aria-controls="list-preparacion"
            onClick={() => toggleTab(1)}
          >
            Preparación
          </a>

          <a
            className={
              "list-group-item list-group-item-action " +
              (toggleState === 2 ? "active" : "")
            }
            id="list-ingredientes-list"
            data-bs-toggle="list"
            href="#list-ingredientes"
            role="tab"
            aria-controls="list-ingredientes"
            onClick={() => toggleTab(2)}
          >
            Ingredientes
          </a>
        </div>

        <div className="tab-content" id="nav-tabContent">
          <div
            className={
              "tab-pane fade" + (toggleState === 1 ? "show active " : "")
            } //show active
            id="list-preparacion"
            role="tabpanel"
            aria-labelledby="list-preparacion-list"
          >
            {props.paso_a_paso}
          </div>
          <div
            className={
              "tab-pane fade" + (toggleState === 2 ? "show active " : "")
            } //
            id="list-ingredientes"
            role="tabpanel"
            aria-labelledby="list-ingredientes-list"
          >
            <ul>
              {props.ingredientes.map((ingrediente) => {
                return <li>{ingrediente}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoritosCartasLista;
