import { number, shape, string } from "prop-types";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSelect } from "../hooks";
import { BasketContext } from "../contexts";

export default function Beer({ beer, maxQuantity = 5 }) {
  const [quantity, setQuantity] = useSelect(1);

  const { addToBasket } = BasketContext.useContext();

  const items = new Array(maxQuantity).fill(null);

  const { id, name, description, imageUri } = beer;

  return (
    <Card sx={{ maxWidth: 345 }} component="article">
      <CardMedia
        component="img"
        height="140"
        image={imageUri}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl variant="standard">
          <InputLabel id="quantity-label">Quantité</InputLabel>
          <Select
            labelId="quantity-label"
            id="demo-simple-select"
            value={quantity}
            label="Quantité"
            size="small"
            onChange={setQuantity}
          >
            {items.map((_, i) => (
              <MenuItem key={i} value={i + 1}>{`${
                i + 1
              } bouteille(s)`}</MenuItem>
            ))}
            ;
          </Select>
        </FormControl>
        <Button size="small" onClick={addToBasket(id, quantity)}>
          Ajouter
        </Button>
      </CardActions>
    </Card>
  );
}

Beer.propTypes = {
  beer: shape({
    id: string,
    name: string,
    price: string,
    description: string,
    imageUri: string,
  }),
  maxQuantity: number,
};
