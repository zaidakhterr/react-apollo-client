import React from "react";
import { Route, Switch } from "react-router-dom";
import Notfound from "./pages/404";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="md:container mx-auto px-4 min-h-screen flex flex-col justify-center align-middle">
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/authors" children={<h1>Authors</h1>} />
          <Route exact path="/books" children={<h1>Book</h1>} />
          <Route exact path="*" children={<Notfound />} />
        </Switch>
      </div>
    </>
  );
};

export default App;
