import { Typography } from "@mui/material";
import { string, node, bool } from "prop-types";

export default function Screen({ title, navigation, isHome = false }) {
  return (
    <>
      <Typography variant="h1">C MY BEER</Typography>
      <Typography variant="h2">{title}</Typography>
      <nav>{navigation}</nav>
    </>
  );
}

Screen.propTypes = {
  title: string.isRequired,
  navigation: node,
  isHome: bool,
};
