import React from "react";
import { Route, Switch } from "react-router-dom";
import Notfound from "./pages/404";
import Authors from "./pages/Authors";
import Books from "./pages/Books";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="md:container mx-auto px-4 min-h-screen flex flex-col justify-center align-middle">
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/authors" children={<Authors />} />
          <Route exact path="/books" children={<Books />} />
          <Route exact path="*" children={<Notfound />} />
        </Switch>
      </div>
    </>
  );
};

export default App;
