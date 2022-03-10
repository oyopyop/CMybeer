import { Link } from "react-router-dom";

export default function BasketScreen() {
  return (
    <>
      <h1>C MY BEER</h1>
      <h2>BasketScreen</h2>
      <nav>
        <Link to="/">Voir mon panier</Link>
      </nav>
    </>
  );
}
