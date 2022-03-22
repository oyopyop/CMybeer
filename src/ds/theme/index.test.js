import theme from "./";

describe("theme", () => {
  it("retruns a correct setting of value", () => {
    expect(theme).toMatchSnapshot();
  });
});
