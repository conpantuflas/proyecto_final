import React, { useEffect, useContext } from "react";
import { Context } from "../../Store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";
import "./Comment_Rate.css";

const CommentRateUserCard = (props) => {
  const { actions, store } = useContext(Context);
  return (
    <>
      <div className="card card-comment-rate">
        <div className="row g-0">
          <div className="col-md-2">
            <img
              src={props.userImg} //Imagen del user
              className="user-avatar img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-10">
            <div className="card-body d-flex flex-column align-items-start text-start">
              <h5 className="card-title d-flex">
                {"User Name"}{" "}
                {[...Array(props.userRating)].map((star, i) => {
                  return props.userRating == null ? (
                    ""
                  ) : (
                    <FaStar key={i} className="totalRatingStars" />
                  );
                })}
              </h5>
              <p className="card-text">{props.userComment}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentRateUserCard;
