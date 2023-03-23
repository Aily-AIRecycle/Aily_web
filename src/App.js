import * as React from "react";
import { Reset } from "styled-reset";
import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Notice from "./pages/Notice";

function App() {
  return (
    <Fragment>
      <Reset />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/notice" component={Notice} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
