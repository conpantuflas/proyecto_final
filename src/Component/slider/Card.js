import React from 'react'
import lasaña from '../ViewRecipe/image/lasaña.jpg'
import '../slider/card.css'

const Card = () => {
  return (
    <div className="dadContent_card">
      <div className="content_card">
        <img className="image_card" src={lasaña} alt="imgx" />
        <div className="divInfo_card">
          <h2 className="title_card">title</h2>
          <p className="valuation_card">@@@@@</p>
        </div>
      </div>
    </div>
  )
}

export default Card
