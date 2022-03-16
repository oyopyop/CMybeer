import styled from "@emotion/styled";
import { Typography, List as MuiList, Box as MuiBox } from "@mui/material";

export const Title = styled(Typography)({
  width: 400,
  margin: "1rem",
});

export const List = styled(MuiList)({
  width: 400,
});

export const Total = styled(MuiBox)(({ theme }) => ({
  Margin: "1rem",
  padding: "1rem",
  borderRadius: 10,
  backgroundColor: "",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
