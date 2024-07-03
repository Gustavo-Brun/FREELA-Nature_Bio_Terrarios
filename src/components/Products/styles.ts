import tw from "tailwind-styled-components";

export const Container = tw.section`
  container
  mx-auto
  grid
  items-center
  justify-center
  gap-12
  px-4
  py-12
  text-center
  md:px-6
  md:py-24
`;

export const Title = tw.h2`
  text-3xl
  font-bold
  tracking-tighter
  sm:text-4xl
  md:text-5xl
`;

export const Text = tw.p`
  mx-auto
  max-w-[700px]
  text-gray-500
  md:text-xl/relaxed
  lg:text-base/relaxed
  xl:text-xl/relaxed
`;

export const ListContainer = tw.div`
  grid
  w-full
  grid-cols-1
  gap-4
  md:grid-cols-2
  md:gap-8
  lg:gap-16
`;

export const ItemContainer = tw.div`
  mb-6
  flex
  flex-col
  gap-2
  text-left
  hover:scale-105
`;

export const ItemTitle = tw.h3`
  text-2xl
  font-bold
`;

export const ItemDescription = tw.p`
  text-lg
  font-bold
  text-gray-500
  dark:text-gray-400
`;
