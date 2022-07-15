import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import StarsModal from "./Comment_Rate_Stars_Modal";
import "./Comment_Rate.css";

//This component captures the comment and the stars rating and passes it to it's parent Comment_Rate in order to add the data to the test_data array, and display it on the list of comments
const CommentRateButton = (props) => {
  let [showModal, setShowModal] = useState(false);
  let [comment, setComment] = useState(null); //only captures text from text area
  let [rating, setRating] = useState(null);
  let [commentAndRating, setCommentAndRating] = useState([]); // stored when pressed the accept button

  let handleModal = () => {
    //Show's modal when button is clicked
    setShowModal(!showModal);
  };

  let handleTextArea = (event) => {
    setComment(event.target.value);
  };

  let captureStars = (enteredStars) => {
    const capturedEnteredStars = enteredStars;
    setRating(capturedEnteredStars);
  };

  let acceptButtonHandler = () => {
    let commentAndRatingUser = [
      {
        id: Math.floor(Math.random() * 100), //Change to active user id
        user: "test user",
        comment: comment,
        rating: rating,
      },
    ];

    setCommentAndRating(commentAndRatingUser);
    props.getData(commentAndRating); //Sends data to father component "Portrait"
    handleModal();
  };

  return (
    <>
      <div>
        <Button onClick={() => handleModal()}>Comment & Rate</Button>
        <Modal show={showModal} onHide={() => handleModal()}>
          <Modal.Header closeButton>Comment & Rate</Modal.Header>
          <Modal.Body>
            <div class="form-group">
              <label for="comment">Comment:</label>
              <textarea
                class="form-control"
                rows="5"
                id="comment"
                value={comment}
                onChange={handleTextArea}
              ></textarea>
            </div>
            <StarsModal captureStars={captureStars} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => acceptButtonHandler()}>Accept</Button>
            <Button onClick={() => handleModal()}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default CommentRateButton;
