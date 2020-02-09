import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { outputsFouls, outputsScore } from "./utils";

test("outputs fouls under the right conditions", () => {
  expect(outputsFouls({ fouls: 0 })).toMatchObject({
    fouls: 1,
    strikes: 1,
    hit: false
  });

  expect(outputsFouls({ fouls: 2 })).toMatchObject({
    fouls: 0,
    strikes: 0,
    hit: false
  });
});

test("outputs the correctly formatted object", () => {
  expect(outputsScore("strikes")).toMatchObject({
    strikes: 1,
    hit: false,
    type: "strikes"
  });

  expect(outputsScore("balls")).toMatchObject({
    balls: 1,
    hit: false,
    type: "balls"
  });
});

test("renders the app without crashing", () => {
  render(<App />);
});

test("renders all buttons", () => {
  const { getAllByTestId } = render(<App />);
  const buttons = getAllByTestId(/btn/i);
  buttons.forEach(btn => expect(btn).toBeInTheDocument());
});

test("renders all displays", () => {
  const { getAllByTestId } = render(<App />);
  const displays = getAllByTestId(/display/i);
  displays.forEach(display => expect(display).toBeInTheDocument());
});
