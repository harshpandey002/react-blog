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
import { deleteStory, likeStory } from "../../../actions/story";

import "./Action.css";

function Action() {
  let params = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const story = useSelector((state) =>
    state.story.filter((post) => post.id === params.id)
  )[0];

  const editHandler = () => {
    history.push(`/edit/${params.id}`);
  };

  const favHandler = () => {
    dispatch(likeStory(story.id));
  };

  return (
    <div className="Action">
      <div onClick={favHandler} className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="btn--name">Add to Fav</div>
      </div>
      <div onClick={editHandler} className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faPen} />
        </div>
        <div className="btn--name">Edit Blog</div>
      </div>
      <div
        onClick={() => {
          dispatch(deleteStory(story.id));
          history.goBack();
        }}
        className="btn"
      >
        <div className="btn--icon">
          <FontAwesomeIcon icon={faTrash} />
        </div>
        <div className="btn--name">Delete Blog</div>
      </div>
      <div onClick={() => history.push("/home")} className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className="btn--name">Home</div>
      </div>
    </div>
  );
}

export default Action;
