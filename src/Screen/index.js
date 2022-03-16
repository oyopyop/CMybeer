import Header from "../Header";
import { node } from "prop-types";
import { Box } from "./styles";
import Basket from "../Basket";
import { useToggle } from "react-use";

export default function Screen({ children }) {
  const [open, toggle] = useToggle();

  return (
    <>
      <Header onToggleBasket={toggle} />
      <Basket open={open} toggle={toggle} />
      <Box component="main">{children}</Box>
    </>
  );
}

Screen.propTypes = {
  children: node,
};
