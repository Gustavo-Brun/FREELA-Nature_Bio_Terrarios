import tw from "tailwind-styled-components";

export const NavbarContainer = tw.section`
  sticky
  top-0
  z-10
  flex
  items-center
  gap-2
  bg-black
  px-4
  py-4
  text-white
  lg:gap-6
  lg:px-6
  lg:py-4
`;

export const Container = tw.div`
  container
  flex
  items-center
  gap-2
  px-4
  lg:gap-6
  lg:px-6
`;

export const Title = tw.h1`
  font-bold
  italic
  lg:text-2xl
`;

export const Nav = tw.nav`
  ml-auto
  lg:pr-20
  lg:text-xl
`;

export const Ul = tw.ul`
  flex
  items-center
  gap-2
  lg:gap-6
`;

export const Li = tw.li`
  hidden
  lg:flex
`;
