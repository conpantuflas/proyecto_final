import React, { useCallback, useContext, useEffect, useState } from 'react'
import Card from './Card'
import '../slider/sMyRecipe.css'
import { Context } from '../../Store/appContext'

const SliderMyRecipe = () => {
  const { actions, store } = useContext(Context)

  useEffect(() => {
    actions.recipesUser(store.tokenLogin.userId)
  }, [])

  return (
    <div className="dadContent_sMyRecipe">
      <div className="Content_sMyRecipe">
        {
          store.recipesByUser.map((recipe, i) => (
            <Card id={recipe.id} key={i} name_recipe={recipe.name_recipe} />
          ))

          //store.recipesByUser
        }
      </div>
    </div>
  )
}

export default SliderMyRecipe
