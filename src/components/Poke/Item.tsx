import { memo } from "react";
import styled from "styled-components";
import { IPokemon } from "../../Interfaces";

const Card = styled.div`
  border: 10px solid #0202024d;  
  border-radius: 5px;
`;

type Pokemon = {
  pokemon: IPokemon;
};

const Item = memo(({ pokemon }: Pokemon) => {

  return (
    <div className="col-span-4 md:col-span-1 sm:col-span-2">
      <Card className="flex justify-center">
        <a
          href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="h-40 rounded-none mx-auto"
            alt="pokemon"
            src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          />
          <h2 className="text-center">
            {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
          </h2>
        </a>
      </Card>
    </div>
  );
});

export default Item;
