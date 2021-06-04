import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTrash,
  faPen,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import "./Action.css";

function Action() {
  let params = useParams();
  let history = useHistory();

  const editHandler = () => {
    history.push(`/edit/${params.id}`);
  };

  return (
    <div className="Action">
      <div className="btn">
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
      <div className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faTrash} />
        </div>
        <div className="btn--name">Delete Blog</div>
      </div>
      <div onClick={() => history.goBack()} className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className="btn--name">Home</div>
      </div>
    </div>
  );
}

export default Action;
