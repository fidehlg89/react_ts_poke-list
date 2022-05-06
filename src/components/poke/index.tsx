type IProps = {
  pokemon: any;
};

const PokeCard = ({ pokemon }: IProps) => {
  return (
    <>
      {pokemon != null ? (
        <div className="border-4 border-sky-500 flex justify-center">
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
            <h2 className="text-center">{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
          </a>
        </div>
      ) : null}
    </>
  );
};

export default PokeCard;
