import { func, string } from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useCategories } from "../hooks";

export default function Filter({ category, setCategory }) {
  const { isLoading, categories } = useCategories();

  return (
    <FormControl sx={{ width: 400, marginBottom: 3 }}>
      <InputLabel id="filter-label">Catégorie</InputLabel>
      <Select
        labelId="filter-label"
        value={category}
        label="Catégorie"
        onChange={setCategory}
        disabled={isLoading}
      >
        <MenuItem value="0">Toutes</MenuItem>
        {categories?.map(({ id, name }) => (
          <MenuItem key={id} value={String(id)}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

Filter.propTypes = {
  category: string,
  setCategory: func,
};
