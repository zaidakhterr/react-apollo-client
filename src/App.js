import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="md:container mx-auto px-4 min-h-screen flex flex-col justify-center align-middle">
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/authors" children={<h1>Authors</h1>} />
          <Route exact path="/books" children={<h1>Book</h1>} />
          <Route exact path="*" children={<h1>Not Found</h1>} />
        </Switch>
      </div>
    </>
  );
};

export default App;
