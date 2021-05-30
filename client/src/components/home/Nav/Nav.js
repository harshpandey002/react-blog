import React from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRandom, faAdjust } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div className="Nav">
      <div className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="btn--name">Create Blog</div>
      </div>
      <div className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faRandom} />
        </div>
        <div className="btn--name">Random Data</div>
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
