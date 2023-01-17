import React, { useState, useContext, memo } from "react";
import { getCoinsContext } from "../context/getCoinsContext";
import Button from "../components/Button";
import Cards from "../features/Cards";
import { MyCardsStyled, PokemonBargainStyled } from "../styles/StylesMyCards";
import { SearchInput } from "../components/SearchInput";
import OwnedPokemons from "../components/OwnedPokemons";

const MyCards = () => {
  const [filter, setFilter] = useState<string>("");
  const { pokemonNumber } = useContext(getCoinsContext);

  return (
    <MyCardsStyled>
      <SearchInput
        setFilter={setFilter}
        value={(e) =>
          setFilter(e.target.value.toLowerCase().replace(/\s/g, ""))
        }
      />
      <PokemonBargainStyled>
        <Button />
        <OwnedPokemons pokemonNumber={pokemonNumber} />
      </PokemonBargainStyled>
      <Cards pokemonNumber={pokemonNumber} filter={filter} />
    </MyCardsStyled>
  );
};

export default memo(MyCards);
