// export const reset = state => {
//   if (state.strikes > 2 || state.balls > 3 || state.hit) {
//     return { strikes: 0, balls: 0, fouls: 0, hit: false };
//   }
// };

export const outputsFouls = state => {
  if (state.fouls < 2) {
    return {
      fouls: 1,
      strikes: 1,
      hit: false
    };
  } else
    return {
      fouls: 0,
      strikes: 0,
      hit: false
    };
};

export const outputsScore = type => {
  return { [type]: 1, hit: false, type };
};
