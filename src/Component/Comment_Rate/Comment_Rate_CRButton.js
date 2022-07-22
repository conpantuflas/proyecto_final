import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../Store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import StarsModal from "./Comment_Rate_Stars_Modal";
import "./Comment_Rate.css";

const CommentRateButton = () => {
  const { actions } = useContext(Context);
  let [showModal, setShowModal] = useState(false);

  let [id_user] = useState(1);
  let [id_recipe] = useState(1);
  //Funcionando
  let [comment, setComment] = useState(""); //only captures text from text area
  let [value, setValue] = useState(null);

  let handleModal = () => {
    //Show's modal when button is clicked
    setShowModal(!showModal);
  };

  let handleTextArea = (event) => {
    setComment(event.target.value);
  };

  let captureStars = (enteredStars) => {
    const capturedEnteredStars = enteredStars;
    setValue(capturedEnteredStars);
  };

  let acceptButtonHandler = () => {
    if (comment != "" && value != null) {
      actions.postComment(id_user, id_recipe, comment, value);
      handleModal();
    }
    actions.getCommentsByRecipeId(id_recipe);
    window.location.reload(false);
  };

  return (
    <>
      <div>
        <Button onClick={() => handleModal()}>Comment & Rate</Button>
        <Modal show={showModal} onHide={() => handleModal()}>
          <Modal.Header closeButton>Comment & Rate</Modal.Header>

          <Modal.Body>
            <div className="form-group">
              <label for="comment">Comment:</label>
              <textarea
                className="form-control"
                rows="5"
                id="comment"
                value={comment}
                onChange={handleTextArea}
              />
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
