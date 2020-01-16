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

  updateFouls = () => {
    if (this.state.fouls < 2) {
      this.setState(
        {
          fouls: this.state.fouls + 1,
          strikes: this.state.strikes + 1,
          hit: false
        },
        () => {
          this.reset();
        }
      );
    }
  };

  reset = () => {
    if (this.state.strikes > 2 || this.state.balls > 3 || this.state.hit) {
      this.setState({ strikes: 0, balls: 0, hit: false });
    }
  };

  increment = type => {
    this.setState({ [type]: this.state[type] + 1, hit: false }, () => {
      this.reset();
    });
  };

  render() {
    return (
      <>
        <Dashboard
          game={this.state}
          hit={this.hit}
          updateFouls={this.updateFouls}
          reset={this.reset}
          increment={this.increment}
        ></Dashboard>
        <Display game={this.state}></Display>
      </>
    );
  }
}
