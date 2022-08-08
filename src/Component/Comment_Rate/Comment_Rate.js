import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Context } from '../../Store/appContext'
import CommentsRatesPortrait from './Comment_Rate_Portrait'
import CommentRateUserCard from './Comment_Rate_User_Card'
import './Comment_Rate.css'
import userImg from './user.png'
import img1 from './img1.jpg'

const CommentsRates = () => {
  const { actions, store } = useContext(Context)
  const params = useParams()
  const [recipeName, setRecipeName] = useState('')
  const [recipeDate] = useState('')
  const [recipeData, setRecipeData] = useState([])
  // const []

  useEffect(() => {
    // actions.handleLogin(); //hace post de login, esto se deberia quitar de aqui despues
    actions.getCommentsByRecipeId(params.id)
    actions.getRecipesByIdUserData(params.id)
    actions.getRecipeById(params.id)
    window.setTimeout(() => {
      setRecipeData(store.recipes[0])
      console.log(recipeData)
      console.log(store.recipes[0])
      const dataRecipeId = store.recipes[0]
      console.log(dataRecipeId['name_recipe'])
      setRecipeName(dataRecipeId['name_recipe'])
    }, 2000)
  }, [])

  return (
    <>
      <div className="container main-CR-container d-flex flex-column align-items-center mb-3">
        <CommentsRatesPortrait
          portraitImg={img1}
          recipeTitle={recipeName}
          recipeDate={recipeDate}
        />
        {store.comments[0] &&
          store.comments[0].map((datai, i) => {
            return (
              <CommentRateUserCard
                key={i}
                userName={datai.user}
                userImg={userImg}
                userComment={datai.comment}
                userRating={datai.value}
              />
            )
          })}
      </div>
    </>
  )
}

export default CommentsRates
