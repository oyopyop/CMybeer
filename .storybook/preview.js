import { BasketContext } from "../src/contexts";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/ds/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <BasketContext.Provider>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </BasketContext.Provider>
    </QueryClientProvider>
  ),
];
