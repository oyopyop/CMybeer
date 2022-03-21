import { render as rtlRender } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { BasketContext } from "../contexts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

export default function render(component) {
  const queryClient = new QueryClient();
  rtlRender(
    <QueryClientProvider client={queryClient}>
      <BasketContext.Provider>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={component} />
          </Routes>
        </BrowserRouter>
      </BasketContext.Provider>
    </QueryClientProvider>
  );
}
