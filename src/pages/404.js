import React from "react";
import { Link } from "react-router-dom";
import { BOX, PRIMARY_BUTTON_CLASS } from "../classes.js";

const Notfound = () => {
  return (
    <>
      <div className={BOX}>
        <Link className={PRIMARY_BUTTON_CLASS} to="/">
          Go Home
        </Link>
      </div>
    </>
  );
};

export default Notfound;
