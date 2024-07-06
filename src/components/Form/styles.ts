import tw from "tailwind-styled-components";

export const FormContainer = tw.section`
  flex
  flex-col
  p-4
`;

export const Title = tw.h1`
  text-xl
  font-bold
  lg:mb-4
  lg:text-3xl
`;

export const ErrorMessage = tw.p`
  text-xs
  text-[#CF2C20]
  lg:text-base
`;
