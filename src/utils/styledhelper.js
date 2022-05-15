import tw from "tailwind-styled-components";

export const Container = tw.div``;

export const HeaderTitle = tw.div`
  flex
  flex-col
  justify-center
  items-center
`;

export const Box = tw.div``;

export const SearchBox = tw.div`
    p-4
    relative
    mx-auto
    text-gray-600
    flex justify-center
`;

export const SearchInput = tw.input`
    border-2
    border-gray-300
    bg-white h-10 px-5
    pr-16 rounded-lg
    text-sm
    focus:outline-none
`
