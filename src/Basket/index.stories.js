import Basket from "./";

export default {
  title: "Domain/Basket",
  component: Basket,
};

const Template = (args) => <Basket open {...args} />;

export const Default = Template.bind({});
