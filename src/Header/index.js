import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "./styles";
import { func } from "prop-types";

export default function Header({ onToggleBasket = Function.prototype }) {
  const mainNavigation = [
    { path: "/", name: "Les bieres" },
    { path: "/countdown", name: "Countdown" },
  ];

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="h1">
            LOGO
          </Typography>
          <Box sx={{ display: "flex" }}>
            {mainNavigation.map(({ name, path }) => (
              <Link to={path} key={path}>
                {name}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={onToggleBasket}
          >
            <Badge badgeContent={4} color="error">
              <ShoppingBasket />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {
  onToggleBasket: func,
};
