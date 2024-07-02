import React from "react";

import * as S from "./styles";

import Image from "next/image";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";

const Navbar = (): React.JSX.Element => {
  return (
    <S.NavbarContainer>
      <Link
        className="flex items-center font-semibold"
        href="/"
      >
        <Image
          src="/images/logoterrario.png"
          width={80}
          height={80}
          alt="Logo"
        />
      </Link>
      <S.Title>NATURE BIO TERRÁRIOS</S.Title>
      <S.Nav>
        <S.Ul>
          <S.Li>
            <Link
              className="font-medium transition-color hover:text-primary-color"
              href="/"
            >
              Início
            </Link>
          </S.Li>
          <li>
            <Link
              className="border-2 p-2 rounded-lg bg-primary-color text-black font-medium transition-color hover:text-secondary-color"
              href="/form"
            >
              Orçamento
            </Link>
          </li>
          <S.Li>
            <Link
              className="font-medium transition-color hover:text-primary-color"
              href="https://wa.me/5521996178510?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+terr%C3%A1rios."
              target="blank"
            >
              Contato
            </Link>
          </S.Li>
          <S.Li>
            <Link
              href={"https://www.instagram.com/naturebioterrarios/"}
              target="blank"
            >
              <FaInstagram
                style={{
                  color: "white",
                  fontSize: "30px",
                  background:
                    "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45)",
                  borderRadius: "30%",
                  padding: "2px"
                }}
              />
            </Link>
          </S.Li>
        </S.Ul>
      </S.Nav>
    </S.NavbarContainer>
  );
};

export default Navbar;
