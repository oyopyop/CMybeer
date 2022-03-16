import { CircularProgress, Grid } from "@mui/material";
import React from "react";

import { useBeers, useSelect } from "../hooks";
import Beer from "../Beer";
import Filter from "../Filter";
import Screen from "../Screen";

export default function HomeScreen() {
  const [category, setCategory] = useSelect();
  const { isLoading, beers } = useBeers({ categoryId: category });
  // const { isLoading, beers } = useBeers({
  //   categoryId: value !== "" ? value : undefined,
  // });

  // if (isLoading)
  //   return (
  //     <Screen>
  //       <Filter category={category} setCategory={setCategory} />
  //       <br />
  //       <CircularProgress />
  //     </Screen>
  //   );

  // if (error) {
  //   console.log("BUG 1224");
  //   return "Pas de resultat. Réessayer plus tard";
  // };

  return (
    <Screen>
      <Filter category={category} setCategory={setCategory} />
      <br />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container justifyContent="space-between" spacing={4}>
          {beers.map((beer) => (
            <Grid key={beer.id} item>
              <Beer beer={beer} />
            </Grid>
          ))}
        </Grid>
      )}
    </Screen>
  );
}
