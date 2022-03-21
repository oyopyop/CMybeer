import { screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import HomeScreen from ".";
import { BasketContext } from "../contexts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
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
