const responseToJson = (response) => response.json();
const apiUri = "https://my-json-server.typicode.com/oyopyop/CMybeer";
//const apiUri = "//localhost:3001";

export default function cMybeersFetch(route) {
  return () => fetch(`${apiUri}${route}`).then(responseToJson);
}
