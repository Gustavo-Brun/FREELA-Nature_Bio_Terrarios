import React from "react";

import * as S from "./styles";

import Link from "next/link";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = (): React.JSX.Element => {
  return (
    <S.FooterContainer>
      <S.Ul>
        <li>
          <p className="font-medium">
            Funcionamento: Segunda à Sexta / 9:00 - 18:00
          </p>
        </li>
        <li>
          <Link
            className="font-medium"
            href="mailto:naturebioterrarios@gmail.com"
          >
            Email: naturebioterrarios@gmail.com
          </Link>
        </li>
        <li>
          <Link
            className="font-medium"
            href="tel:+552199617-8510"
          >
            Telefone: +55 21 99617-8510
          </Link>
        </li>
        <li>
          <p className="font-medium">CNPJ: 51.896.232/0001-00</p>
        </li>
      </S.Ul>
      <Link
        className="mx-auto flex flex-col items-center gap-2 font-semibold "
        href="/"
      >
        <p className="text-primary-color text-4xl lg:text-5xl">Nature BIO</p>
        <p className="text-tertiary-color text-xl lg:text-2xl">Terrários</p>
      </Link>

      <S.SocialMidiaContainer>
        <Link
          target="blank"
          href="https://wa.me/5521996178510?text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+terr%C3%A1rios."
        >
          <FaWhatsapp
            style={{
              background: "linear-gradient(45deg, #25D366, #128C7E)",
              borderRadius: "30%",
              fontSize: "40px",
              padding: "2px"
            }}
          />
        </Link>

        <Link
          target="blank"
          href="https://www.instagram.com/naturebioterrarios/"
        >
          <FaInstagram
            style={{
              color: "white",
              fontSize: "40px",
              background:
                "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45)",
              borderRadius: "30%",
              padding: "2px"
            }}
          />
        </Link>
      </S.SocialMidiaContainer>
    </S.FooterContainer>
  );
};

export default Footer;
