import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FavoritosPaginacion = ({ tarjetasVisibles, totalTarjetas, paginar }) => {
  const numerPaginas = [];
  for (let i = 1; i <= Math.ceil(totalTarjetas / tarjetasVisibles); i++) {
    numerPaginas.push(i);
  }
  return (
    <div className="container">
      <nav>
        <ul className="pagination">
          {numerPaginas.map((numero) => (
            <li key={numero} className="page-item">
              <a onClick={() => paginar(numero)} href="#" className="page-link">
                {numero}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FavoritosPaginacion;
