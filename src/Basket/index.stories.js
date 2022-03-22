import Basket from "./";
import { BasketContext } from "../contexts";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../ds/theme";

export default {
  title: "Domain/Basket",
  component: Basket,
};

const queryClient = new QueryClient();

export const Open = () => (
  <QueryClientProvider client={queryClient}>
    <BasketContext.Provider>
      <ThemeProvider theme={theme}>
        <Basket open />
      </ThemeProvider>
    </BasketContext.Provider>
  </QueryClientProvider>
);
