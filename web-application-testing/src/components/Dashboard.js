import React from "react";

import { outputsFouls, outputsScore } from "../utils";

export const Dashboard = ({ hit, updateFouls, increment, game }) => {
  return (
    <>
      <button data-testid="btn" onClick={() => increment(outputsScore("strikes"))}>strike</button>
      <button data-testid="btn" onClick={() => increment(outputsScore("balls"))}>ball</button>
      <button data-testid="btn" onClick={() => hit()}>hit</button>
      <button data-testid="btn" onClick={() => updateFouls(outputsFouls(game))}>foul</button>
    </>
  );
};
