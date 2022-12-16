import { Card } from "../components/Card";
import { usePokemonData } from "../data/Pokemons";
import { DeckStyled } from "../styles/StylesMyCards";

export const Cards = () => {
  const data = usePokemonData().slice(0, 20);

  return (
    <DeckStyled>
      {data.length === 0 ? (
        <div>loading...</div>
      ) : (
        data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.name}
            img={item.img}
            types={item.types}
          />
        ))
      )}
    </DeckStyled>
  );
};
