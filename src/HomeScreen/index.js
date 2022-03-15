import Screen from "../Screen";
import Beer from "../Beer";
import { Grid } from "@mui/material";

export default function HomeScreen() {
  //const beers = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const beers = new Array(20).fill(null).map((_, i) => ({ id: i }));

  return (
    <Screen>
      <Grid container spacing={2} justifyContent="space-between">
        {beers.map(({ id }) => (
          <Grid item key={id}>
            <Beer id={id} />
          </Grid>
        ))}
      </Grid>
    </Screen>
  );
}
