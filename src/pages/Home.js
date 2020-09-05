import React from "react";
import { Link } from "react-router-dom";
import { BOX_CLASS, PRIMARY_BUTTON_CLASS } from "../classes.js";

const Home = () => {
  return (
    <>
      <div className={BOX_CLASS}>
        <Link className={PRIMARY_BUTTON_CLASS} to="/authors">
          Authors
        </Link>
        <Link className={PRIMARY_BUTTON_CLASS} to="/books">
          Books
        </Link>
      </div>
    </>
  );
};

export default Home;
