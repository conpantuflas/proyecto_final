import React from 'react';
import "./style/portions.css"
import portion from "./image/portions.png"

const Portions = () => {
    return (
        <div className="content_portions">
            <img className="image_portions" src={portion} alt="x" />
            <p className="portions_portions" >4</p>
        </div>
    );
}

export default Portions;
