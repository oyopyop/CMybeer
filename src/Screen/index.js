import Header from "../Header";
import { node } from "prop-types";
import { Box } from "./styles";

export default function Screen({ children }) {
  return (
    <>
      <Header />
      <Box component="main">{children}</Box>
    </>
  );
}

Screen.propTypes = {
  children: node,
};
