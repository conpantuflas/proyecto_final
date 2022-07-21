import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Favoritos.css";
import FavoritosPaginacion from "./FavoritosPaginacion";

import FavoritosCartas from "./FavoritosCartas";

//imagenes de prueba
import img1 from "./imagenesDePrueba/img1.jpg";
import img2 from "./imagenesDePrueba/img2.jpg";
import img3 from "./imagenesDePrueba/img3.jpg";
import img4 from "./imagenesDePrueba/img4.jpg";
import img5 from "./imagenesDePrueba/img5.jpg";
import img6 from "./imagenesDePrueba/img6.jpg";
import img7 from "./imagenesDePrueba/img7.jpg";
import Navbar from "../Navbar/Navbar";

const Favoritos = () => {
  let favoritos = [
    {
      id: 1,
      imagen: img1,
      usuario: "Pepito",
      ingredientes: ["crema de chocolate", "granola", "cacao"],
      nombre_receta: "Super postre de satanas",
      fecha_creacion: "02-02-2021",
      paso_a_paso:
        "Fugiat elit officia eiusmod anim reprehenderit quis consequat sint veniam. Aliqua non minim culpa dolore sunt non occaecat minim aliquip sint incididunt esse. Elit velit nisi eu cillum laboris qui tempor officia nostrud elit anim. Nulla veniam cupidatat et eiusmod duis mollit eu est duis sunt sint. Nisi sint adipisicing aliquip nisi excepteur irure enim mollit sit aute laboris qui laborum Lorem.",
      valoracion: [4],
    },
    {
      id: 2,
      imagen: img2,
      usuario: "Juanito",
      ingredientes: ["pan", "jamon", "queso", "lechuga", "pepinillos"],
      nombre_receta: "Sandwich mortal",
      fecha_creacion: "02-02-2021",
      paso_a_paso:
        "Labore sint est consectetur tempor est veniam. Quis qui aliquip ipsum dolore incididunt consectetur cupidatat nisi sunt labore esse mollit laborum quis. Sit officia eu enim ullamco pariatur cillum laboris esse deserunt nostrud dolor. Ullamco consequat officia occaecat exercitation enim incididunt veniam magna exercitation. Excepteur cillum fugiat eu proident eu velit amet consectetur exercitation voluptate. Ipsum occaecat deserunt sint sint officia fugiat laborum aliquip nulla enim culpa enim dolor quis. Exercitation anim deserunt proident mollit in nulla amet quis.",
      valoracion: [3],
    },
    {
      id: 3,
      imagen: img3,
      usuario: "Pedrito",
      ingredientes: ["tallarines", "queso rayado", "camarones"],
      nombre_receta: "Tallarines con camaron",
      fecha_creacion: "02-02-2021",
      paso_a_paso:
        "Duis consequat irure laboris magna esse duis incididunt duis. Sunt officia aliqua irure culpa consectetur. Officia sit adipisicing consectetur commodo. Elit minim consequat culpa amet nostrud ex minim nulla minim dolor laboris cupidatat amet. Dolore anim aliquip magna pariatur excepteur nulla ut Lorem fugiat mollit in amet.",
      valoracion: [3],
    },
    {
      id: 4,
      imagen: img4,
      usuario: "Pablita",
      ingredientes: [
        "Pan de hamburguesa",
        "Habmurguesa",
        "pepinillo",
        "mayonesa",
      ],
      nombre_receta: "hamburguesa tapaarterias",
      fecha_creacion: "02-02-2021",
      paso_a_paso:
        "Occaecat do magna aliquip excepteur. Deserunt anim minim culpa nisi cillum nisi quis est sunt ex ullamco. Minim ea commodo id exercitation sit. Id dolor eiusmod exercitation reprehenderit magna labore veniam veniam. Lorem sit cupidatat proident enim magna ut tempor aute nulla officia pariatur irure.",
      valoracion: [2],
    },
    {
      id: 5,
      imagen: img5,
      usuario: "Flora",
      ingredientes: ["huevo", "harina", "manjar", "leche"],
      nombre_receta: "Panqueques con manjar",
      fecha_creacion: "02-02-2021",
      paso_a_paso:
        "Laboris culpa ullamco aliqua sunt cupidatat deserunt nulla dolor pariatur adipisicing mollit consectetur. Eiusmod cillum tempor ipsum nisi velit ullamco incididunt amet occaecat nisi aute sit qui aliqua. Eu ea sunt exercitation excepteur elit proident non aliquip reprehenderit nostrud sint nisi ullamco laboris. Laborum nisi tempor minim excepteur nulla magna aute excepteur sit nostrud. Magna ad consectetur consequat officia esse excepteur. Aliqua incididunt non deserunt consectetur irure fugiat ea. Et labore deserunt dolor eu proident veniam incididunt anim magna.",
      valoracion: [3],
    },
    {
      id: 6,
      imagen: img6,
      usuario: "Neli",
      ingredientes: ["queso parmesano", "aceitunas", ""],
      nombre_receta: "Super pizza",
      fecha_creacion: "02-02-2021",
      paso_a_paso:
        "In ipsum non nulla Lorem veniam incididunt. Proident proident tempor aliqua proident quis elit aute anim. Ut ex ut deserunt laboris in incididunt voluptate Lorem labore. Aliquip veniam ea non aute esse pariatur qui. Aliqua est enim in aute elit enim exercitation elit irure dolore id. Adipisicing ipsum duis amet consectetur.",
      valoracion: [5],
    },
    {
      id: 7,
      imagen: img7,
      usuario: "Roberto",
      ingredientes: ["salmon", "salsa teriyaki", "aceite"],
      nombre_receta: "Salmon teriyaki",
      fecha_creacion: "02-02-2021",
      paso_a_paso:
        "Officia amet consequat adipisicing do aute quis officia Lorem ea nulla qui officia nostrud anim. Mollit ea eu nostrud ullamco reprehenderit Lorem. Qui officia exercitation tempor eiusmod dolore quis irure commodo ipsum aliqua. Aliqua ut qui fugiat aliquip eu veniam nulla magna voluptate occaecat sit sunt. Magna ipsum eu adipisicing do veniam reprehenderit. Occaecat consectetur aliquip id dolor.",
      valoracion: [4],
    },
  ];

  const [paginaActual, setPaginaActual] = useState(1);
  const [tarjetasVisibles] = useState(3);
  //En un futuro debera recibir el usuario que esta logueado por ahora enfocarse en desplegar los favoritos

  //Para obtener el favorito actual
  const indiceUltimaTarjeta = paginaActual * tarjetasVisibles;
  const indicePrimeraTarjeta = indiceUltimaTarjeta - tarjetasVisibles;
  const favVisible = favoritos.slice(indicePrimeraTarjeta, indiceUltimaTarjeta);

  //Cambio pagina
  const paginar = (numeroPagina) => setPaginaActual(numeroPagina);

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          {favVisible.map((favorito) => {
            return (
              <div key={favorito.id} className="col-md-4">
                <FavoritosCartas
                  imagen={favorito.imagen}
                  titulo={favorito.nombre_receta}
                  fecha_creacion={favorito.fecha_creacion}
                  autor={favorito.usuario}
                  paso_a_paso={favorito.paso_a_paso}
                  ingredientes={favorito.ingredientes}
                />
              </div>
            );
          })}
        </div>
      </div>
      <FavoritosPaginacion
        tarjetasVisibles={tarjetasVisibles}
        totalTarjetas={favoritos.length}
        paginar={paginar}
      />
    </>
  );
};

export default Favoritos;
