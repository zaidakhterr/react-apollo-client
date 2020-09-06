import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div className="md:w-3/4 xl:w-1/2 mx-auto border-2 p-20 rounded flex align-middle justify-center flex-col md:flex-row">
        <Link
          className="w-48 text-center inline-block bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-10 m-2 rounded-full transition-colors duration-300 ease-in-out"
          to="/"
        >
          Go Home
        </Link>
      </div>
    </>
  );
};

export default Notfound;
