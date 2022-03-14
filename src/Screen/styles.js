import styled from "styled-components";

export const Title = styled.h1`
  color: lightcoral;
`;

export const SubTitle = styled.h2`
  color: ${({ isHome }) => (isHome ? "lightskyblue" : "lightseagreen")};
  text-decoration: underline;
`;
