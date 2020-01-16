import React from "react";

export const Dashboard = ({ game, hit, updateFouls, increment }) => {
  return (
    <>
      <button onClick={() => increment("strikes")}>strike</button>
      <button onClick={() => increment("balls")}>ball</button>
      <button onClick={() => hit()}>hit</button>
      <button onClick={() => updateFouls()}>foul</button>
    </>
  );
};
