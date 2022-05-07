import { useState } from "react";
import PokeCard from "./components/poke";

interface IPokemon {
  name: string;
}

const App = () => {
  const [pokeList, setPokes] = useState([]);
  const [searchedList, setSearchedPokes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPokemon = () => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setPokes(data.results);
        setLoading(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearchedPokes(
      pokeList.filter((object: IPokemon) =>
        object.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center">
        <b>{process.env.REACT_APP_TITLE}</b>
        <div>
          <button className="rounded-md" onClick={() => getPokemon()}>
            Get List
          </button>
          <span> | </span>
          <button
            className="rounded-md"
            onClick={() => {
              setPokes([]);
              setSearchedPokes([]);
            }}
          >
            Clean List
          </button>
        </div>
      </div>

      <div>
        <div className="p-4 relative mx-auto text-gray-600 flex justify-center">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            placeholder="Buscar"
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-4 gap-4 px-4">
          {loading
            ? "Loading"
            : searchedList.length > 0
            ? searchedList.map((item: IPokemon, index) => (
                <div className="col-span-4 md:col-span-1 sm:col-span-2">
                  <PokeCard pokemon={item} key={index} />
                </div>
              ))
            : pokeList.length > 0
            ? pokeList.map((item: IPokemon, index) => (
                <div className="col-span-4 md:col-span-1 sm:col-span-2">
                  <PokeCard pokemon={item} key={index} />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default App;
