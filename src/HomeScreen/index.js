import Screen from "../Screen";
import Beer from "../Beer";
import { Grid, CircularProgress } from "@mui/material";
import React from "react";

const responseToJson = (response) => response.json();

export default function HomeScreen() {
  const [beers, setBeers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://my-json-server.typicode.com/oyopyop/CMybeer/beers")
      .then(responseToJson)
      .then((beers) => setBeers(beers));
  }, [setBeers]);

  const hasbeer = beers.length > 0;

  return (
    <Screen>
      {hasbeer ? (
        <Grid container spacing={2} justifyContent="space-between">
          {beers.map((beer) => (
            <Grid item key={beer.id}>
              <Beer beer={beer} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Screen>
  );
}
