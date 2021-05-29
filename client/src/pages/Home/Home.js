import React from "react";
import Filter from "../Filter/Filter";
import Main from "../../components/home/Main/Main";
import Nav from "../../components/home/Nav/Nav";

function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Filter />
      <Main />
      <Nav />
    </div>
  );
}

export default Home;
