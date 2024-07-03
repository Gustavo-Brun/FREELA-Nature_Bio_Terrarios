import tw from "tailwind-styled-components";

export const FeedbackContainer = tw.section`
  container
  mb-12
  grid
  items-center
  justify-center
  gap-12
  px-4
  text-center
  md:px-6
`;

export const Title = tw.h2`
  mb-3
  text-3xl
  font-bold
  tracking-tighter
  sm:text-4xl
  md:text-5xl
`;

export const Description = tw.p`
  mx-auto
  max-w-[700px]
  text-gray-500
  md:text-xl/relaxed
  lg:text-base/relaxed
  xl:text-xl/relaxed
`;

export const ImagesContainer = tw.div`
  flex
  w-full
  grid-cols-1
  flex-col
  items-center
  gap-10
  lg:flex-row
`;

export const Item = tw.div`
  flex
  flex-col
  items-center
  gap-2
`;

export const ItemTitle = tw.h3`
  text-2xl
  font-bold
`;
