import { memo } from "react";
import { IPokemon } from "../../Interfaces";
import Item from "./Item";

type IProps = {
  loading: Boolean;
  filteredPokes: never[];
};

const List = memo(({ loading, filteredPokes }: IProps) => {

  return (
    <div className="grid grid-cols-4 gap-4 px-4">
      {loading
        ? "Loading"
        : filteredPokes?.map((item: IPokemon, index) => (
            <Item key={index} pokemon={item} />
          ))}
    </div>
  );
});

export default List;

// {loading
//   ? "Loading"
//   : searchedList.length > 0
//   ? searchedList.map((item: IPokemon, index) => (
//       <div className="col-span-4 md:col-span-1 sm:col-span-2">
//         <Item pokemon={item} key={index} />
//       </div>
//     ))
//   : pokeList.length > 0
//   ? pokeList.map((item: IPokemon, index) => (
//       <div className="col-span-4 md:col-span-1 sm:col-span-2">
//         <PokeCard pokemon={item} key={index} />
//       </div>
//     ))
//   : null}
