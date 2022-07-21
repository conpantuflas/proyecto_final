import React, { useState, useContext } from "react";
import { Context } from "../../Store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import StarsModal from "./Comment_Rate_Stars_Modal";
import "./Comment_Rate.css";

//This component captures the comment and the stars rating and passes it to it's parent Comment_Rate in order to add the data to the test_data array, and display it on the list of comments
const CommentRateButton = () => {
  const { actions } = useContext(Context);
  let [showModal, setShowModal] = useState(false);

  let [id_user] = useState(1);
  let [id_recipe] = useState(6);
  //Funcionando
  let [comment, setComment] = useState(null); //only captures text from text area
  let [rating, setRating] = useState(null);

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
    actions.postComment(id_user, id_recipe, comment, rating); //Probar si funca desarmar el resto de relacionas hijo padre y ver en insomnia  si funciona
    actions.getCommentsByRecipeId(id_recipe);
    handleModal();
    window.location.reload(false);
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
