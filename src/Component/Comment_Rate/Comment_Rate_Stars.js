import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";

import "./Comment_Rate.css";

const CommentRateStars = (props) => {
  return (
    <>
      <div>
        {[...Array(props.starsAvg)].map((star) => {
          return <FaStar className="totalRatingStars" />;
        })}
      </div>
    </>
  );
};

export default CommentRateStars;
