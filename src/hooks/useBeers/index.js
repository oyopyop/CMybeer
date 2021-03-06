import { useQuery } from "react-query";
import queryString from "query-string";

import cMyBeersFetch from "../../cMyBeersFetch";

export default function useBeers({ categoryId } = {}) {
  const cleanCat =
    categoryId === "" || categoryId === "0" ? undefined : categoryId;
  const beersUrl = queryString.stringifyUrl({
    url: "/beers",
    query: { categoryId: cleanCat },
  });

  const { isLoading, error, data } = useQuery(
    ["beers", cleanCat],
    cMyBeersFetch(beersUrl)
  );

  return { isLoading, error, beers: data };
}
