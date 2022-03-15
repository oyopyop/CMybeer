import React from "react";

export default function useCunter(initialCount, step) {
  const [count, setCount] = React.useState(initialCount);

  const decrement = () => setCount(Math.max(count - step, 0));
  const reset = () => setCount(initialCount);

  return [count, { decrement, reset }];
}
