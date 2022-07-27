import tw from "tailwind-styled-components";

export const Container = tw.div`
  
`;

export const Button = tw.button`
px-4 py-3 text-white bg-blue-500 hover:bg-blue-400 rounded-lg shadow-lg ml-2
`;

export const SecButton = tw.button`
px-4 py-3 text-white bg-gray-500 hover:bg-gray-400 rounded-lg shadow-lg ml-2
`;

export const Header = tw.div`
  flex
  flex-col
  justify-center
  items-center
`;

export const Box = tw.div`
  p-2
`;

export const SearchBox = tw.div`
    p-4
    relative
    mx-auto
    text-gray-600
    flex justify-center
    rounded-lg
`;

export const SearchInput = tw.input`
    border-2
    border-gray-300
    bg-white
    px-5
    pr-16
    rounded-lg
    text-lg
    focus:outline-none
`;
