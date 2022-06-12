import { useState } from "react";
import PokeCard from "./components/poke";
import {Container, Box, HeaderTitle, SearchBox, SearchInput} from "./utils/styledhelper"

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
    <Container>
      <HeaderTitle>
        <b>{process.env.REACT_APP_TITLE}</b>
        <Box>
          <button
            className="px-4 py-3 text-white bg-blue-500 hover:bg-blue-400"
            onClick={() => getPokemon()}
          >
            Get List
          </button>
          <button
            className="px-4 py-3 text-white bg-gray-500 hover:bg-gray-400"
            onClick={() => {
              setPokes([]);
              setSearchedPokes([]);
            }}
          >
            Clean List
          </button>
        </Box>
      </HeaderTitle>

      <Box>
        <SearchBox>
          <SearchInput
            placeholder="Search..."
            onChange={handleChange}
          />
        </SearchBox>
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
      </Box>
    </Container>
  );
};

export default App;
