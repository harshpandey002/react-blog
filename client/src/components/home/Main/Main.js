import React from "react";
import "./Main.css";
import Info from "./Info/Info";
import Blogs from "./Blogs/Blogs";

function Main() {
  return (
    <div className="Main">
      <h2>Main Component</h2>
      <Info />
      <Blogs />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero minima
        voluptatibus, libero asperiores incidunt rerum blanditiis voluptates
        error ratione. Tempore possimus eveniet voluptatum ut deleniti impedit,
        excepturi nostrum sequi. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quibusdam aliquam accusantium doloremque, commodi
        possimus tenetur dolore exercitationem ipsum veniam esse repellendus.
        Excepturi, tenetur nesciunt expedita sint quas necessitatibus ea
        deserunt.
      </p>
    </div>
  );
}

export default Main;
