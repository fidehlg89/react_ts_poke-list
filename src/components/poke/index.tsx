import styled from "styled-components";

const Card = styled.div`
  border: "10px solid",
  borderImage:"url(https://isurojit.github.io/pokemondatabase/static/media/border-img.4120e392.png) 30",
  borderRadius:"5px"
`;

type IProps = {
  pokemon: any;
};

const PokeCard = ({ pokemon }: IProps) => {
  return (
    <>
      {pokemon != null ? (
        <Card className="flex justify-center">
          <a
            href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-24 h-24 rounded-none mx-auto"
              alt="pokemon"
              src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
            />
            <h2 className="text-center">
              {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
            </h2>
          </a>
        </Card>
      ) : null}
    </>
  );
};

export default PokeCard;
