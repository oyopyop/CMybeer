import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";

import HomeScreen from ".";

describe("Countdown", () => {
  describe("without any props", () => {
    it("renders counter", () => {
      render(<HomeScreen />);
      expect(10).toBeInTheDocument();
    });
  });
});
