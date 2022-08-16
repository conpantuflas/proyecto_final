import React from 'react'
import lasaña from '../ViewRecipe/image/lasaña.jpg'
import '../slider/card.css'
import { Link } from 'react-router-dom'

const Card = ({ name_recipe, id }) => {
  return (
    <Link to={`/viewRecipe/${id}`}>
      <div className="dadContent_card">
        <div className="content_card">
          <img className="image_card" src={lasaña} alt="imgx" />
          <div className="divInfo_card">
            <h2 className="title_card">{name_recipe}</h2>
            <p className="valuation_card">@@@@@</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
