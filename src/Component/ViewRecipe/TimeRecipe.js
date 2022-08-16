import React from 'react'
import './style/timeRecipe.css'
import timeImage from './image/time.png'

const TimeRecipe = ({ time }) => {
  return (
    <div className="content_timeRecipe">
      <img className="image_TimeRecipe" src={timeImage} alt="x" />
      <div className="contentTime_timeRecipe">
        <p className="number_timeRecipe">{time}</p>
      </div>
    </div>
  )
}

export default TimeRecipe
