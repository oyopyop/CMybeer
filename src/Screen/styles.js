import { styled } from "@mui/material/styles";
import { Box as MuiBox } from "@mui/material";

export const Box = styled(MuiBox)(({ theme }) => ({
  padding: theme.spacing(4),
}));
