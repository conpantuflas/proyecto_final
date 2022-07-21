import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Comment_Rate.css";
import CommentRateStars from "./Comment_Rate_Stars";
import CommentRateButton from "./Comment_Rate_CRButton";

const CommentsRatesPortrait = (props) => {
  return (
    <div className="card bg-dark text-white d-flex">
      <img src={props.portraitImg} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <div className="card-CR-inner-container d-flex flex-column align-content-between flex-wrap">
          <div className="card-inner-container-text  d-flex flex-column align-items-start mb-auto">
            <h5 className="card-title">
              Recipe title - {<CommentRateStars />}- N comments
            </h5>
            <h5 className="card-title">Recipe Author</h5>
            <p className="card-text">Date of creation</p>
          </div>
          <div className="d-flex flex-column align-items-start ">
            <CommentRateButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentsRatesPortrait;
