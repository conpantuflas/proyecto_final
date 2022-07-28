import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../../Store/appContext";
import "./Comment_Rate.css";
import CommentRateStars from "./Comment_Rate_Stars";
import CommentRateButton from "./Comment_Rate_CRButton";

const CommentsRatesPortrait = (props) => {
  const { store } = useContext(Context);

  return (
    <div className="card bg-dark text-white d-flex">
      <img src={props.portraitImg} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <div className="card-CR-inner-container d-flex flex-column align-content-between flex-wrap">
          <div className="card-inner-container-text  d-flex flex-column align-items-start mb-auto">
            <h5 className="card-title">
              {<CommentRateStars />} {props.recipeTitle}
            </h5>
            <h5 className="card-title">By: {store.recipeAuth["user_name"]}</h5>
            <p className="card-text">
              {props.recipeDate != null ? props.recipeDate : ""}
            </p>
          </div>
          <div className="d-flex flex-column align-items-start ">
            {store.loggedUserResponse.length != 0 ? (
              <CommentRateButton />
            ) : (
              <div>Please Log in for comment & rate</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentsRatesPortrait;
