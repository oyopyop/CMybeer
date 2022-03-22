import React from "react";

import Countdown from "./";

export default {
  title: "Design System/Organism/Countdown",
  component: Countdown,
};

export const Default = () => <Countdown />;

export const WithABigStep = () => <Countdown step={50} />;

export const startAt10 = () => <Countdown initialCount={10} />;
