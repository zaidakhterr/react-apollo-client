import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "./pages/404";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="*" children={<NotFound />} />
      </Switch>
    </>
  );
};

export default App;
