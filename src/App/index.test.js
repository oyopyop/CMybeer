import { render, screen } from "@testing-library/react";
import App from ".";

test("renders CMyBeer app title", () => {
  render(<App />);
  //const title = screen.getByText(/C My Beer/i);
  const title = screen.getByRole("heading", { level: 1, name: /C My Beer/i });
  expect(title).toBeInTheDocument();
});
