import React from 'react';
import Carrusel from '../Component/Carrusel/carrusel';
import Navbar from '../Component/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            {/* header */}
            <div>
                <Navbar />
                <Carrusel />
            </div>
        </div>
    );
}

export default Home;
