import React, { useEffect, useMemo, useState } from "react";
import {
  Container,
  Box,
  Header,
  SearchBox,
  SearchInput,
  Button,
  SecButton,
} from "../utils/styledhelper";
import List from "../components/Poke/List";
import { IPokemon } from "../Interfaces";

const PokeContainer = () => {
  const [pokeList, setPokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Poke Container Render");
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setPokes(data.results);
        setLoading(false);
      });
  }, []);

  const cleanList = () => {
    setSearch("");
    setText("");
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredPokes = useMemo(
    () =>
      pokeList.filter((poke: IPokemon) => {
        return poke.name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      }),
    [search, pokeList]
  );

  return (
    <Container>
      <Header>
        <b>{process.env.REACT_APP_TITLE}</b>
        <SearchBox>
          <SearchInput
            placeholder="Search..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
            value={text}
          />
          <Button onClick={handleSearch}>Search</Button>
          <SecButton onClick={cleanList}>Clean Search</SecButton>
        </SearchBox>
      </Header>
      <Box>
        <List loading={loading} filteredPokes={filteredPokes} />
      </Box>
    </Container>
  );
};

export default PokeContainer;
