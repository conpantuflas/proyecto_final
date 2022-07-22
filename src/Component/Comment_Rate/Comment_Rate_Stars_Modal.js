import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Comment_Rate.css";

const StarsModal = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  let ratingHandler = (ratingVal) => {
    setRating(ratingVal);
    props.captureStars(ratingVal);
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => ratingHandler(ratingValue)}
            ></input>
            <FaStar
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              className="modal-stars"
              size={25}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarsModal;
