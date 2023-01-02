import React, { useState } from "react";
import Button from "../components/Button";
import Cards from "../features/Cards";
import { MyCardsStyled, PokemonBargainStyled } from "../styles/StylesMyCards";
import { SearchInput } from "../components/SearchInput";
import OwnedPokemons from "../components/OwnedPokemons";

const MyCards = () => {
  const [pokemonNumber, setPokemonNumber] = useState<number>(20);
  const [filter, setFilter] = useState<string>("");

  return (
    <MyCardsStyled>
      <SearchInput
        setFilter={setFilter}
        value={(e) =>
          setFilter(e.target.value.toLowerCase().replace(/\s/g, ""))
        }
      />
      <PokemonBargainStyled>
        <Button setPokemonNumber={setPokemonNumber} />
        <OwnedPokemons pokemonNumber={pokemonNumber} />
      </PokemonBargainStyled>
      <Cards pokemonNumber={pokemonNumber} filter={filter} />
    </MyCardsStyled>
  );
};

export default MyCards;
