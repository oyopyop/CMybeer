import "./styles.css";
import { number } from "prop-types";
import React from "react";
import { useCunter } from "../hooks";

export default function Countdown({ initialCount = 100, step = 1 }) {
  //const [count, setCount] = React.useState(initialCount);
  // const decrement = () => setCount(Math.max(count - step, 0));
  // const reset = () => setCount(initialCount);

  const [count, { decrement, reset }] = useCunter(initialCount, step);

  return (
    <>
      <p
        role="timer"
        aria-label="counter"
        area-live="polite"
        className="countdown-number"
      >
        {count}
      </p>
      <button className="countdown-button" onClick={() => decrement()}>
        Countdown
      </button>
      <button className="countdown-button" onClick={() => reset()}>
        Reset
      </button>
    </>
  );
}

Countdown.propTypes = {
  initialCount: number,
  step: number,
};
