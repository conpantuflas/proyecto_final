import React from 'react';
import "./style/timeRecipe.css"
import time from "./image/time.png"

const TimeRecipe = () => {
    return (
        <div className="content_timeRecipe">
            <img className='image_TimeRecipe' src={time} alt="x" />
            <div className="contentTime_timeRecipe">
                <p className='number_timeRecipe'>30</p>
                <p className='scaleTime_timeRecipe'>min</p>
            </div>
        </div>
    );
}

export default TimeRecipe;
