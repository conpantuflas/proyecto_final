import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";
import { Context } from "../../Store/appContext";
import "./Comment_Rate.css";

const CommentRateStars = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getCommentsByRecipeId(1);
  }, []);

  return (
    <>
      <div>
        {[...Array(store.comments[1])].map((star, i) => {
          return <FaStar key={i} className="totalRatingStars" />;
        })}
      </div>
    </>
  );
};

export default CommentRateStars;
