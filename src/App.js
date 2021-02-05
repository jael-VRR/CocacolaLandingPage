import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./views/Layout.jsx";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/layout">
          <Layout />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
