import React from "react";
import ModalCreateAcount from "../Component/modals/ModalCreateAcount";
import ModalMyPantry from "../Component/modals/ModalMyPantry";
import ModalSessionStart from "../Component/modals/ModalSessionStart";
import Favoritos from "../Component/Favoritos/Favoritos";
import Comment_Rate from "../Component/Comment_Rate/Comment_Rate";
//import Carrusel from '../Component/Carrusel/carrusel';
import Navbar from "../Component/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      {/* header */}
      <div>
        {/* <Navbar /> */}
        {/* <ModalCreateAcount />       */}
        {/* <ModalSessionStart /> */}
        {/* <ModalMyPantry /> */}
        {/* <Carrusel /> */}
        <Comment_Rate />
      </div>
    </div>
  );
};

export default Home;
