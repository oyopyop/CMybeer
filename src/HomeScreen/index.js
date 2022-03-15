import { Grid, CircularProgress } from "@mui/material";
import React from "react";

import { useBeers } from "../hooks";
import Screen from "../Screen";
import Beer from "../Beer";

export default function HomeScreen() {
  const { isLoading, beers } = useBeers();

  if (isLoading)
    return (
      <Screen>
        <CircularProgress />
      </Screen>
    );

  // if (error) {
  //   console.log("BUG 1224");
  //   return "Pas de resultat. Réessayer plus tard";
  // };

  return (
    <Screen>
      <Grid container spacing={2} justifyContent="space-between">
        {beers.map((beer) => (
          <Grid item key={beer.id}>
            <Beer beer={beer} />
          </Grid>
        ))}
      </Grid>
    </Screen>
  );
}
