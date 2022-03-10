import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "../HomeScreen";
import BasketScreen from "../BasketScreen";
import BeerScreen from "../BeerScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/basket" element={<BasketScreen />} />
        <Route path="/beers/:id" element={<BeerScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
