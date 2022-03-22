import Basket from "./";
import { BasketContext } from "../contexts";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../App/theme";

export default {
  title: "Basket",
  component: Basket,
};

//export const Default = () => <Basket />;

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
