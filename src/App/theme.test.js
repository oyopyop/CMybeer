import theme from "./theme";

describe("theme", () => {
  it("retruns a correct setting of value", () => {
    expect(theme).toMatchSnapshot();
  });
});
