import React from "react";
import SignUp from "./SignUp";
import Home from "./Home";
import LoginIn from "./loginIn";
import Navbar from "./navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function DashBoard() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/loginin" component={LoginIn} />
      </Switch>
    </Router>
  );
}

export default DashBoard;
