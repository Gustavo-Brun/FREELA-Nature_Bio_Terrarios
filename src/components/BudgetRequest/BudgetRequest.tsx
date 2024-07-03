"use client";

import React from "react";

import * as S from "./styles";

import Link from "next/link";

const BudgetRequest = (): React.JSX.Element => {
  return (
    <S.BudgetRequestContainer>
      <S.Content>
        <S.Title> Gostou? </S.Title>
        <S.Description>
          {" "}
          Vem conhecer nosso serviço feito especialmente para você e seu pet!{" "}
        </S.Description>
        <Link
          href={"/form"}
          className="my-5 bg-tertiary-color hover:bg-gradient-to-r hover:from-secondary-color  hover:to-primary-color text-black font-bold py-2 px-6 rounded-full shadow-md transition-transform  ease-in-out transform hover:scale-110 active:text-red-600"
        >
          Solicitar Orçamento Gratuito.
        </Link>
      </S.Content>
    </S.BudgetRequestContainer>
  );
};

export default BudgetRequest;
