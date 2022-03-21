import { screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import HomeScreen from ".";
import render from "../testUtils";

describe("HomeScreen", () => {
  it("display a filter", () => {
    render(<HomeScreen />);
    expect(
      screen.getByRole("button", { name: "Catégorie" })
    ).toBeInTheDocument();
  });

  xit("display a beer list", () => {
    render(<HomeScreen />);
    expect(screen.getByRole("button", { name: "counter" })).toBeInTheDocument();
  });
});
