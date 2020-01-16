import React from "react";

export const Display = ({ game }) => {
  return (
    <>
      <h2>balls: {game.balls}</h2>
      <h2>strikes: {game.strikes}</h2>
    </>
  );
};
