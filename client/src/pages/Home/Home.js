import React from "react";
import Filter from "../Filter/Filter";
import Main from "../../components/home/Main/Main";
import Nav from "../../components/home/Nav/Nav";
import "../style.css";

function Home({ setDark, dark, demo, setDemo, filter, setFilter }) {
  return (
    <div className="Page">
      <Filter dark={dark} setFilter={setFilter} />
      <Main dark={dark} filter={filter} />
      <Nav dark={dark} setDark={setDark} demo={demo} setDemo={setDemo} />
    </div>
  );
}

export default Home;
