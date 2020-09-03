import React from "react";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" children={<h1>App</h1>} />
        <Route exact path="/authors" children={<h1>Authors</h1>} />
        <Route exact path="/books" children={<h1>Book</h1>} />
        <Route exact path="*" children={<h1>Not Found</h1>} />
      </Switch>
    </>
  );
};

export default App;
