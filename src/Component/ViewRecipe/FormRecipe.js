import React, { useContext, useEffect } from 'react'
import { Context } from '../../Store/appContext'
import './style/form.css'

const FormRecipe = () => {
  const { store, actions } = useContext(Context)

  return (
    <div className="contentIngredient">
      <h2>Ingredients</h2>
      {store.ingredientDetails.length
        ? store.ingredientDetails.map((iDet, i) => (
            <div className="ingredientRecipe">
              <div key={i} className="contentAllIngredients">
                <p className="oneIngredient">{iDet.ingredient_name}</p>
                <p className="measure">{iDet.i_details_portion}</p>
                <p className="measure">{iDet.i_details_measure}</p>
              </div>
            </div>
          ))
        : 'error'}
    </div>
  )
}

export default FormRecipe
