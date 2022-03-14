import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import HomeScreen from "../HomeScreen";
import BasketScreen from "../BasketScreen";
import BeerScreen from "../BeerScreen";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/basket" element={<BasketScreen />} />
          <Route path="/beers/:id" element={<BeerScreen />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
