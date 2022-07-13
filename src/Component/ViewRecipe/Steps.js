import React from 'react';
import "./style/steps.css"
import imagenProvisoria from "./image/lasaña.jpg"

const Steps = () => {
    return (
        <div>
            <p className="preparationsFirstTitle_steps">Preparations steps</p>

            <div className="oneStep">
                <img className="image_steps" src={imagenProvisoria} alt="x" />
                <div className="divText_step">
                    <p className="titleDescription_step">Title</p>
                    <p className="description_step">
                    la cocina es famoso en todo el mundo, no sólo en Italia. Ideal para llevar 
                    en el tupper al trabajo o al cole, y que sin duda triunfa entre los más 
                    pequeños de casa. No os paséis con la cantidad, con una porción es suficiente,
                    una receta bastante completa y te da para superar un día lleno de energía.
                    </p>
                </div>
            </div>

            <div className="oneStep">
                <img className="image_steps" src={imagenProvisoria}  alt="x"/>
                <div className="divText_step">
                    <p className="titleDescription_step">Title</p>
                    <p className="description_step">
                    la cocina es famoso en todo el mundo, no sólo en Italia. Ideal para llevar 
                    en el tupper al trabajo o al cole, y que sin duda triunfa entre los más 
                    pequeños de casa. No os paséis con la cantidad, con una porción es suficiente,
                    una receta bastante completa y te da para superar un día lleno de energía.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Steps;
