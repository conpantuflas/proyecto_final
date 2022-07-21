import React from 'react';
import ModalCreateAcount from '../Component/modals/ModalCreateAcount';
import ModalMyPantry from '../Component/modals/ModalMyPantry';
import ModalSessionStart from '../Component/modals/ModalSessionStart';

//import Carrusel from '../Component/Carrusel/carrusel';
import Navbar from '../Component/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            {/* header */}
            <div>
                <Navbar />
                <ModalSessionStart />
                {/* <Carrusel /> */}
            </div>
        </div>
    );
}

export default Home;
