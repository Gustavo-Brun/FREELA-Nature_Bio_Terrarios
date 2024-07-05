import tw from "tailwind-styled-components";

export const FooterContainer = tw.footer`
  flex
  flex-col
  items-center
  justify-center
  gap-8
  bg-gradient-to-tr
  from-primary-color
  px-4
  py-12
  text-center
  md:flex-row
  md:gap-10
  md:px-6
  lg:gap-16
`;

export const Ul = tw.ul`
  flex
  flex-col
  gap-4
  text-sm
  lg:gap-6
  lg:text-start
  lg:text-xl
`;

export const SocialMidiaContainer = tw.div`
  flex
  gap-4
  text-center
  md:ml-auto
  lg:mr-48
  lg:flex-col
  lg:gap-6
`;
