import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MyCards from "./Routes/MyCards";
import { Pokemon } from "./types/interfaces";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }
  const data = await response.json();
  return data;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/myCards",
        element: <MyCards />,
        loader: async () => {
          const { results: allPokemonsData } = await fetchData(
            "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0"
          );

          const arrayOfPokemons: Pokemon[] = [];
          for await (const pokemon of allPokemonsData) {
            const { id, name, types } = await fetchData(pokemon.url);
            const newPokemon = {
              id,
              name,
              img:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                id +
                ".png",
              types: types.map(
                (pokemonType: { type: { name: string } }) =>
                  pokemonType.type.name
              ),
            };
            arrayOfPokemons.push(newPokemon);
          }
          return arrayOfPokemons;
        },
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
