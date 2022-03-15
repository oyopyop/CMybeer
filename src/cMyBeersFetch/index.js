const responseToJson = (response) => response.json();
const apiUri = "https://my-json-server.typicode.com/oyopyop/CMybeer";

export default function cMybeersFetch(route) {
  return () => fetch(`${apiUri}${route}`).then(responseToJson);
}
