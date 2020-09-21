import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "./pages/404";
import Authors from "./pages/Authors";
import Books from "./pages/Books";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route exact path="/books" children={<Books />} />
        <Route exact path="/authors" children={<Authors />} />
        <Route path="*" children={<NotFound />} />
      </Switch>
    </>
  );
};

export default App;
