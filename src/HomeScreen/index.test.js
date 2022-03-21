import { screen, waitForElementToBeRemoved } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import HomeScreen from ".";
import render from "../testUtils";

const progressBarAlement = () => screen.getByRole("progressbar");

describe("HomeScreen", () => {
  it("display a filter", () => {
    render(<HomeScreen />);
    expect(
      screen.getByRole("button", { name: "Catégorie" })
    ).toBeInTheDocument();
  });

  describe("While loading data", () => {
    it("display a beer list", () => {
      render(<HomeScreen />);
      expect(progressBarAlement()).toBeInTheDocument();
    });
  });

  describe("With data", () => {
    it("display a beer list", async () => {
      render(<HomeScreen />);

      await waitForElementToBeRemoved(progressBarAlement());

      expect(
        screen.getByRole("heading", { level: 3, name: "Focal Banger" })
      ).toBeInTheDocument();
    });
  });
});
