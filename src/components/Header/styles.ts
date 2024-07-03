import tw from "tailwind-styled-components";

export const Header = tw.header`
  w-full
  bg-gray-100
`;

export const Container = tw.div`
  container
  flex
  flex-col
  items-center
  justify-center
  gap-4
  px-4
  text-center
  md:px-6
  lg:flex-row
`;

export const VideoContainer = tw.div`
  relative
`;

export const TextContainer = tw.div`
  m-10
  space-y-3
  lg:m-0
`;

export const Title = tw.h1`
  text-3xl
  font-bold
  tracking-tighter
  text-black
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
