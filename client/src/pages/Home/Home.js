import React from "react";
import Filter from "../Filter/Filter";
import Main from "../../components/home/Main/Main";
import Nav from "../../components/home/Nav/Nav";
import "../style.css";

function Home() {
  return (
    <div className="Page">
      <Filter />
      <Main />
      <Nav />
    </div>
  );
}

export default Home;
