import React from "react";
import "./Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDotCircle,
  faAddressCard,
} from "@fortawesome/free-regular-svg-icons";

function Filter() {
  return (
    <div className="Filter">
      <div className="btn">
        <div className="btn--icon">
          <FontAwesomeIcon icon={faDotCircle} />
        </div>
        <div className="btn--name">Global</div>
      </div>
    </div>
  );
}

export default Filter;
