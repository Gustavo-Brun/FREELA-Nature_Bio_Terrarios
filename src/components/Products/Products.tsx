import React from "react";

import * as S from "./styles";

import Image from "next/image";
import Link from "next/link";

const Products = (): React.JSX.Element => {
  return (
    <S.Container>
      <div>
        <S.Title>Conheça Nossos Terrários</S.Title>
        <S.Text>
          O ambiente mais natural possível que seu pet precisa 🌿🍃
        </S.Text>
      </div>
      <S.ListContainer>
        <Link href={"/form"}>
          <S.ItemContainer>
            <Image
              alt="Terrarium"
              className="overflow-hidden rounded-xl object-scale-down object-center shadow-xl"
              height={300}
              width={400}
              src="/images/Arboricolas.jpeg"
            />
            <S.ItemTitle>Terrários Arborícolas</S.ItemTitle>
            <S.ItemDescription>Saiba mais</S.ItemDescription>
          </S.ItemContainer>
        </Link>
        <Link href={"/form"}>
          <S.ItemContainer>
            <Image
              alt="Terrarium"
              className="overflow-hidden rounded-xl object-scale-down object-center shadow-xl"
              height={300}
              width={400}
              src="/images/Horizontais.jpeg"
            />

            <S.ItemTitle>Terrários Horizontais</S.ItemTitle>

            <S.ItemDescription>Saiba mais</S.ItemDescription>
          </S.ItemContainer>
        </Link>
        <Link href={"/form"}>
          <S.ItemContainer>
            <Image
              alt="Terrarium"
              className="overflow-hidden rounded-xl object-scale-down object-center shadow-xl"
              height={300}
              width={400}
              src="/images/Decorados.jpeg"
            />

            <S.ItemTitle>Terrários Decorados </S.ItemTitle>
            <S.ItemDescription>Saiba mais</S.ItemDescription>
          </S.ItemContainer>
        </Link>
        <Link href={"/form"}>
          <S.ItemContainer>
            <Image
              alt="Terrarium"
              className="overflow-hidden rounded-xl object-scale-down object-center shadow-xl"
              height={300}
              width={400}
              src="/images/Aquaterrarios.jpeg"
            />

            <S.ItemTitle>Aquaterrários</S.ItemTitle>
            <S.ItemDescription>Saiba mais</S.ItemDescription>
          </S.ItemContainer>
        </Link>
      </S.ListContainer>
    </S.Container>
  );
};

export default Products;
