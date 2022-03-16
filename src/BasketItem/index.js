import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { string, bool } from "prop-types";
import BasketItemPrice, {
  types as basketItemPriceTypes,
} from "../BasketItemPrice";

export default function BasketItem({
  name,
  imageUri,
  price,
  quantity,
  divider = false,
}) {
  //const priceWithQuantity = `${price} * ${quantity}`;
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={imageUri} alt={name}></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={<BasketItemPrice price={price} quantity={quantity} />}
        />
      </ListItem>
      {divider && <Divider variant="inset" component="li" />}
    </>
  );
}

BasketItem.propTypes = {
  name: string,
  imageUri: string,
  divider: bool,
  ...basketItemPriceTypes,
};
