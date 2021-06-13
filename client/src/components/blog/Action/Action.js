import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTrash,
  faPen,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { deleteStory, updateStory } from "../../../actions/story";

import "./Action.css";

function Action({ dark }) {
  let params = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const story = useSelector((state) =>
    state.story.filter((post) => post._id === params.id)
  )[0];

  const editHandler = () => {
    history.push(`/edit/${params.id}`);
  };

  const favHandler = () => {
    const favStory = { ...story, like: !story.like };
    dispatch(updateStory(favStory));
  };

  return (
    <div className={`Action ${dark ? `Action-dark` : ""}`}>
      <div onClick={favHandler} className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="btn--name">
          <span className="hideText">Add to </span>
          <span className="actionText">Fav</span>
        </div>
      </div>
      <div onClick={editHandler} className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faPen} />
        </div>
        <div className="btn--name">
          <span className="actionText">Edit</span>
          <span className="hideText"> Blog</span>
        </div>
      </div>
      <div
        onClick={() => {
          dispatch(deleteStory(story._id));
          history.goBack();
        }}
        className="btn"
      >
        <div className="btn--icon">
          <FontAwesomeIcon icon={faTrash} />
        </div>
        <div className="btn--name">
          <span className="actionText">Delete</span>
          <span className="hideText"> Blog</span>
        </div>
      </div>
      <div onClick={() => history.push("/home")} className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className="btn--name">
          <span className="actionText">Home</span>
        </div>
      </div>
    </div>
  );
}

export default Action;
