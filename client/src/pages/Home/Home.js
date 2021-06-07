import React from "react";
import Filter from "../Filter/Filter";
import Main from "../../components/home/Main/Main";
import Nav from "../../components/home/Nav/Nav";
import "../style.css";

function Home({ demo, setDemo, filter, setFilter }) {
  return (
    <div className="Page">
      <Filter setFilter={setFilter} />
      <Main filter={filter} />
      <Nav demo={demo} setDemo={setDemo} />
    </div>
  );
}

export default Home;
