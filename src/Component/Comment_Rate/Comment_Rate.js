import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../../Store/appContext";
import CommentsRatesPortrait from "./Comment_Rate_Portrait";
import CommentRateUserCard from "./Comment_Rate_User_Card";
import "./Comment_Rate.css";
import img1 from "./img1.jpg";

const CommentsRates = () => {
  const { actions, store } = useContext(Context);
  const params = useParams();
  const [recipeName, setRecipeName] = useState("");
  const [recipeDate, setrecipeDate] = useState("");
  // const []

  useEffect(() => {
    actions.handleLogin(); //hace post de login, esto se deberia quitar de aqui despues
    actions.getCommentsByRecipeId(params.id);
    actions.getRecipesByIdUserData(params.id);
    window.setTimeout(() => {
      // actions.getRecipeById(params.id);
      const filteredById = store.recipes.filter((frecipe) => {
        return frecipe.id == params.id;
      });
      setRecipeName(filteredById[0].name_recipe);
      setrecipeDate(filteredById[0].date_creation);
    }, 2000);
  }, []);

  return (
    <>
      {/* {console.log(store.loggedUserResponse)} */}
      <div className="container main-CR-container d-flex flex-column mb-3">
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
                // userName={datai.user}
                // userImg={datai.user_img}
                userComment={datai.comment}
                userRating={datai.value}
              />
            );
          })}
      </div>
    </>
  );
};

export default CommentsRates;
