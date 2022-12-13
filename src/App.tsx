import React, { useMemo } from "react";
import { PokemonData } from "./data/Pokemons";
import { Header } from "./components/Header";
import { Cards } from "./features/Cards";
import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      <Header />
      <Button onClick={() => console.log("data")} />
      <Cards />
    </div>
  );
}

export default App;
