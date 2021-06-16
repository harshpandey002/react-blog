import React from "react";
import Filter from "../Filter/Filter";
import Main from "../../components/home/Main/Main";
import Nav from "../../components/home/Nav/Nav";
import "../style.css";
import { motion } from "framer-motion";
import { container } from "../../animation/animate";

function Home({ setDark, dark, demo, setDemo, filter, setFilter }) {
  return (
    <motion.div
      className="Page"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <Filter dark={dark} filter={filter} setFilter={setFilter} />
      <Main dark={dark} filter={filter} />
      <Nav dark={dark} setDark={setDark} demo={demo} setDemo={setDemo} />
    </motion.div>
  );
}

export default Home;
