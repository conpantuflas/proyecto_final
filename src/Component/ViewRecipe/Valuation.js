import React from 'react';
import "./style/starValuation.css"
import fullStar from "./image/full_star.png";
import starHalf from "./image/star_half.png";
import starLined from "./image/star_lined.png"

const Valuation = () => {
    return (
        <div>
            <img className='star_valuation' src={fullStar} alt="x"/>
            <img className='star_valuation' src={fullStar} alt="x"/>
            <img className='star_valuation' src={fullStar} alt="x"/>
            <img className='star_valuation' src={starHalf} alt="x"/>
            <img className='star_valuation' src={starLined} alt="x"/>
        </div>
    );
}

export default Valuation;
