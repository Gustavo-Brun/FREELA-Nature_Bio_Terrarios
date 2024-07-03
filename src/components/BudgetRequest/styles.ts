import tw from "tailwind-styled-components";

export const BudgetRequestContainer = tw.section`
  bg-[url('/images/background.jpeg')]
  py-10
`;

export const Content = tw.div`
  m-auto
  my-10
  grid
  w-[60%]
  transform
  justify-items-center
  rounded-xl
  border-2
  bg-white
  p-5
  shadow-2xl
  transition-transform
  duration-300
  ease-in-out
  hover:scale-110
`;

export const Title = tw.h3`
  my-2
  text-3xl
  font-bold
`;

export const Description = tw.p`
  my-4
  text-xl
  transition-colors
  duration-300
  hover:text-gray-600
`;
