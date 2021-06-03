import React from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRandom, faAdjust } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";

function Nav() {
  let history = useHistory();
  const handleClick = () => {
    history.push(`/edit/${uuidv4()}`);
  };

  return (
    <div className="Nav">
      <div onClick={handleClick} className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="btn--name">New Story</div>
      </div>
      <div className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faRandom} />
        </div>
        <div className="btn--name">Demo Stories</div>
      </div>
      <div className="btn theme">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faAdjust} />
        </div>
        <div className="btn--name">Switch Theme</div>
      </div>
    </div>
  );
}

export default Nav;
