import React from "react";

const basketReducer = (state, { type, payload }) => {
  switch (type) {
    case "addToBasket":
      const { id, count } = payload;

      return {
        ...state,
        [id]: state[id] === undefined ? count : state[id] + count,
      };
    default:
      return state;
  }
};

export default function useBasket() {
  //const [basket] = React.useReducer(basketReducer, { lFHjKe: 4, CFIZtr: 6 });
  const [basket, dispatch] = React.useReducer(basketReducer, {});

  const addToBasket = (id, count) => () => {
    dispatch({ type: "addToBasket", payload: { id, count } });
  };
  return { basket, addToBasket };
}
