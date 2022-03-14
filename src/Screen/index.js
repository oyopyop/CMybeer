import { string, node, bool } from "prop-types";
//import "./styles.css";
import { Title, SubTitle } from "./styles";

export default function Screen({ title, navigation, isHome = false }) {
  return (
    <>
      <Title>C MY BEER</Title>
      <SubTitle isHome={isHome}>{title}</SubTitle>
      <nav>{navigation}</nav>
    </>
  );
}

Screen.propTypes = {
  title: string.isRequired,
  navigation: node,
  isHome: bool,
};
