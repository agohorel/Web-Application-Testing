import React, { Component } from "react";

import { Dashboard } from "./components/Dashboard";
import { Display } from "./components/Display";

export default class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0,
    hit: false
  };

  hit = () => {
    this.setState({ hit: true }, () => {
      this.reset();
    });
  };

  updateFouls = values => {
    this.setState(
      {
        fouls: this.state.fouls + values.fouls,
        strikes: this.state.strikes + values.strikes,
        hit: values.hit
      },
      () => {
        this.reset();
      }
    );
  };

  reset = () => {
    if (this.state.strikes > 2 || this.state.balls > 3 || this.state.hit) {
      this.setState({ strikes: 0, balls: 0, fouls: 0, hit: false });
    }
  };

  increment = values => {
    this.setState(
      {
        [values.type]: this.state[values.type] + values[values.type],
        hit: false
      },
      () => {
        this.reset();
      }
    );
  };

  render() {
    return (
      <>
        <Dashboard
          game={this.state}
          hit={this.hit}
          updateFouls={this.updateFouls}
          increment={this.increment}
        ></Dashboard>
        <Display game={this.state}></Display>
      </>
    );
  }
}
