import React, { useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../../Store/appContext";
import CommentsRatesPortrait from "./Comment_Rate_Portrait";
import CommentRateUserCard from "./Comment_Rate_User_Card";
import "./Comment_Rate.css";
import img1 from "./img1.jpg";

const CommentsRates = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.handleLogin(); //hace post de login
    actions.getCommentsByRecipeId(1);
  }, []);

  return (
    <>
      {console.log(store.loggedUserResponse)}
      <div className="container main-CR-container d-flex flex-column mb-3">
        <CommentsRatesPortrait portraitImg={img1} />
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
