import React from "react";
import PokemonData from "./data/Pokemons";
function App() {
  PokemonData();
  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
