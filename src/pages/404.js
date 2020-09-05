import React from "react";
import { Link } from "react-router-dom";
import { BOX_CLASS, PRIMARY_BUTTON_CLASS } from "../classes.js";

const Notfound = () => {
  return (
    <>
      <div className={BOX_CLASS}>
        <Link className={PRIMARY_BUTTON_CLASS} to="/">
          Go Home
        </Link>
      </div>
    </>
  );
};

export default Notfound;
