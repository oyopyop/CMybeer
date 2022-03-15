import { Grid, CircularProgress } from "@mui/material";
import React from "react";

import useBeers from "../useBeers";
import Screen from "../Screen";
import Beer from "../Beer";

export default function HomeScreen() {
  const [beers] = useBeers();

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
