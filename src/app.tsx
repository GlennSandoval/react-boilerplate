import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import asyncComponent from "@/utilities/async-component";

import Home from "@/page/home";
import Form from "@/page/form";

const NZInfo = asyncComponent(() => import(/* webpackChunkName: "[request]" */ 'page/nzinfo'));

export default function App() {
  return (
    <Router>
      <div style={{height: "100%"}}>
        <Link to="/">Home</Link>
        &nbsp;&nbsp;
        <Link to="/nz">Async data</Link>
        &nbsp;&nbsp;
        <Link to="/form">Form</Link>
        <Switch>
          <Route path="/nz">
            <NZInfo />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
