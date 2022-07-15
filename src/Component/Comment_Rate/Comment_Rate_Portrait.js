import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Comment_Rate.css";
import CommentRateStars from "./Comment_Rate_Stars";
import CommentRateButton from "./Comment_Rate_CRButton";

const CommentsRatesPortrait = (props) => {
  // let [dataFromChild, setDataFromChild] = useState([]);

  let dataFromCRButtonHandler = (dataFromCRButton) => {
    //Capture data from button component to pass it to Comment_Rate
    let captureddataFromCRButton = dataFromCRButton;
    props.getDataFromPortrait(captureddataFromCRButton);
  };

  return (
    <div className="card bg-dark text-white d-flex">
      <img src={props.portraitImg} className="card-img" alt="..." />
      <div className="card-img-overlay ">
        <div className="card-inner-container d-flex flex-column align-content-between flex-wrap">
          <div className="card-inner-container-text  d-flex flex-column align-items-start mb-auto">
            <h5 className="card-title">
              Recipe title - {<CommentRateStars starsAvg={props.avgRating()} />}
              - N comments
            </h5>
            <h5 className="card-title">Recipe Author</h5>
            <p className="card-text">Date of creation</p>
          </div>
          <div className="d-flex flex-column align-items-start ">
            <CommentRateButton getData={dataFromCRButtonHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentsRatesPortrait;
