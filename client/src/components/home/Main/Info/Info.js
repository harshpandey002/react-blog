import React from "react";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

//CSS
import "./Info.css";

function Info() {
  return (
    <div className="Info">
      <FontAwesomeIcon
        onClick={() =>
          window.open("https://github.com/harshpandey002/react-blog/", "_blank")
        }
        className="brands"
        size="2x"
        icon={faGithub}
      />
      <FontAwesomeIcon
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/harsh-kumar-pandey-5ab9071aa/",
            "_blank"
          )
        }
        className="brands"
        size="2x"
        icon={faLinkedin}
      />
      <FontAwesomeIcon
        onClick={() =>
          window.open("https://www.instagram.com/harshpandey_002/", "_blank")
        }
        className="brands"
        size="2x"
        icon={faInstagram}
      />
    </div>
  );
}

export default Info;
