import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../Store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import StarsModal from "./Comment_Rate_Stars_Modal";
import "./Comment_Rate.css";

const CommentRateButton = () => {
  const { actions, store } = useContext(Context);
  let [showModal, setShowModal] = useState(false);

  let [id_user] = useState(store.loggedUserResponse.id);
  let [id_recipe] = useState(1);
  let [comment, setComment] = useState("");
  let [value, setValue] = useState(null);

  let handleModal = () => {
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
    actions.postComment(id_user, id_recipe, comment, value);
    // window.location.reload();
  };

  return (
    <>
      <div>
        <Button className="btn btn-secondary" onClick={() => handleModal()}>
          Comment & Rate
        </Button>
        <Modal show={showModal} onHide={() => handleModal()}>
          <Modal.Header closeButton>Comment & Rate</Modal.Header>

          <Modal.Body>
            <div className="form-group">
              <label htmlFor="comment">Comment:</label>
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
