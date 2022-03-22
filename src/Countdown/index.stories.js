import React from "react";

import Countdown from "./";

export default {
  title: "Design System/Organism/Countdown",
  component: Countdown,
};

const Template = (args) => <Countdown {...args} />;

export const Default = Template.bind({});

export const WithABigStep = Template.bind({});
WithABigStep.args = {
  step: 50,
};

export const startAt10 = Template.bind({});
startAt10.args = {
  initialCount: 10,
};

export const ForTheWin = Template.bind({});
ForTheWin.args = {
  ...startAt10.args,
  ...WithABigStep.args,
};
