import React from "react";

export const Display = ({ game }) => {
  return (
    <>
      <h2 data-testid="display">balls: {game.balls}</h2>
      <h2 data-testid="display">strikes: {game.strikes}</h2>
    </>
  );
};
