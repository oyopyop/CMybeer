import { Drawer, Typography } from "@mui/material";
import { bool, func } from "prop-types";
import * as React from "react";
import { List, Title, Total } from "./styles";
import BasketItem from "../BasketItem";
import Price from "../Price";
import { BasketContext } from "../contexts";

export default function Basket({ open = false, toggle = Function.prototype }) {
  const { totalPrice, basketItems } = BasketContext.useContext();

  return (
    <Drawer anchor="right" open={open} onClose={toggle}>
      <Title
        variant="h4"
        component="h4"
        sx={{
          width: 400,
        }}
      >
        Mon Panier
      </Title>
      <List>
        {basketItems.map((beer, i) => (
          <BasketItem
            key={beer.id}
            {...beer}
            divider={i !== basketItems.length - 1}
          ></BasketItem>
        ))}
      </List>
      <Total>
        <Typography variant="h5" component="h6">
          Total
        </Typography>
        <Typography variant="h5" component="h6">
          <Price value={totalPrice} />
        </Typography>
      </Total>
    </Drawer>
  );
}

Basket.propTypes = {
  open: bool,
  toggle: func,
};
