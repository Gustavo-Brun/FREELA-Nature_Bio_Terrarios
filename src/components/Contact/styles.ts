import tw from "tailwind-styled-components";

export const ContactContainer = tw.section`
  flex
  flex-col
  items-center
  gap-24
  py-12
  md:py-24
  lg:py-32
`;

export const SideText = tw.h2`
  text-4xl
  underline
  lg:text-6xl
`;

export const Container = tw.div`
  container
  flex
  flex-col
  items-center
  justify-center
  gap-10
  px-4
  text-center
  md:flex-row
  md:px-20
`;

export const Title = tw.h3`
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
