import React from "react";
import { node } from "prop-types";
import { useBasket, useBeers } from "../../hooks";

const BasketContext = React.createContext();

const useContext = () => React.useContext(BasketContext);

const sumPrice = (subTotal, { quantity, price }) => subTotal + quantity * price;
const sumQuantity = (subTotal, { quantity }) => subTotal + quantity;

const Provider = ({ children }) => {
  const { basket, addToBasket } = useBasket();

  const { isLoading, beers } = useBeers();

  const basketItems = isLoading
    ? []
    : beers
        .filter(({ id }) => Object.keys(basket).includes(id))
        .map((beer) => ({ ...beer, quantity: basket[beer.id] }));

  const totalPrice = String(basketItems.reduce(sumPrice, 0));

  const basketItemsCount = basketItems.reduce(sumQuantity, 0);

  const value = {
    totalPrice,
    basketItemsCount,
    basketItems,
    addToBasket,
  };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

const CustomBasketProvider = {
  Provider,
  useContext,
};

export default CustomBasketProvider;

Provider.propTypes = {
  children: node,
};
