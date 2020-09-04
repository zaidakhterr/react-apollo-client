import React from "react";
import { Link } from "react-router-dom";

const PRIMARY_BUTTON_CLASS =
  "w-48 text-center inline-block bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-10 m-2 rounded-full transition-colors duration-300 ease-in-out";

const Home = () => {
  return (
    <>
      <div className="md:w-3/4 xl:w-1/2 mx-auto border-2 p-20 rounded flex align-middle justify-center flex-col md:flex-row">
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
