import { number } from "prop-types";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const useQuantity = () => {
  const [quantity, setQuantity] = React.useState(1);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return [quantity, handleChange];
};

export default function Beer({ id, maxQuantity = 5 }) {
  const [quantity, setQuantity] = useQuantity();

  const items = new Array(maxQuantity).fill(null);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://brewerydb-images.s3.amazonaws.com/beer/2KmX83/upload_hDX9EQ-medium.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
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
        <Button size="small">Ajouter</Button>
      </CardActions>
    </Card>
  );
}

Screen.propTypes = {
  id: number.isRequired,
  maxQuantity: number,
};
