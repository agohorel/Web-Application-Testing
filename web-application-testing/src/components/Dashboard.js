import React from "react";

import { outputsFouls, outputsScore } from "../utils";

export const Dashboard = ({ hit, updateFouls, increment, game }) => {
  return (
    <>
      <button onClick={() => increment(outputsScore("strikes"))}>strike</button>
      <button onClick={() => increment(outputsScore("balls"))}>ball</button>
      <button onClick={() => hit()}>hit</button>
      <button onClick={() => updateFouls(outputsFouls(game))}>foul</button>
    </>
  );
};
