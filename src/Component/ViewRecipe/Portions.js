import React from 'react'
import './style/portions.css'
import portionImage from './image/portions.png'

const Portions = ({ portion }) => {
  return (
    <div className="content_portions">
      <img className="image_portions" src={portionImage} alt="x" />
      <p className="portions_portions">{portion}</p>
    </div>
  )
}

export default Portions
