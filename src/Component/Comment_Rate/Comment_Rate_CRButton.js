import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import StarsModal from "./Comment_Rate_Stars_Modal";
import "./Comment_Rate.css";

const CommentRateButton = () => {
  const { actions, store } = useContext(Context);
  const params = useParams();
  let [showModal, setShowModal] = useState(false);
  let [id_user] = useState(store.loggedUserResponse.id);
  let [id_recipe] = useState(params.id);
  let [comment, setComment] = useState("");
  let [value, setValue] = useState(null);
  let [storeuserID, setstoreuserId] = useState(""); //borrar

  useEffect(() => {
    //probar con un for
    window.setTimeout(() => {
      if (store.comments[0] != undefined) {
        let storedComments = [...store.comments[0]];
        const filterIduser = storedComments.filter((comment) => {
          return comment.id_user == store.loggedUserResponse.id || undefined;
        });
        if (filterIduser == undefined) {
          console.log("no comment for user id");
        } else if (filterIduser[0] == undefined) {
          console.log("no comment for user id");
        } else {
          let userIdfromCommet = filterIduser[0].id_user;
          setstoreuserId(userIdfromCommet);
        }
      }
    }, 3000);
  }, []);

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
      {storeuserID !== id_user ? (
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
      ) : (
        "This user already commented"
      )}
    </>
  );
};
export default CommentRateButton;
