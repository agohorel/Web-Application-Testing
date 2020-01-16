import React, { Component } from "react";

import { Dashboard } from "./components/Dashboard";
import { Display } from "./components/Display";

export default class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0
  };

  render() {
    return (
      <>
        <Dashboard></Dashboard>
        <Display></Display>
      </>
    );
  }
}
