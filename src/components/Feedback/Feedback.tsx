"use client";

import React from "react";

import * as S from "./styles";

import Image from "next/image";

const Review = (): React.JSX.Element => {
  return (
    <S.FeedbackContainer>
      <div>
        <S.Title>Clientes Satisfeitos</S.Title>
        <S.Description>
          Nossos terrários trazem alegria para os pets de todo o Brasil! Veja o
          que nossos clientes estão falando.
        </S.Description>
      </div>
      <S.ImagesContainer>
        <S.Item>
          <Image
            alt="Review Image 1"
            className="rounded-2xl border border-gray-200"
            src="/images/Feedback-1.png"
            height={400}
            width={400}
            style={{
              objectFit: "fill"
            }}
          />

          <S.ItemTitle>@juhreptiles</S.ItemTitle>
        </S.Item>
        <S.Item>
          <Image
            alt="Review Image 2"
            className="rounded-2xl border border-gray-200 "
            src="/images/Feedback-2.png"
            height={400}
            width={400}
            style={{
              objectFit: "cover"
            }}
          />

          <S.ItemTitle>Pedro</S.ItemTitle>
        </S.Item>
        <S.Item>
          <Image
            alt="Review Image 3"
            className="rounded-2xl border border-gray-200 "
            src="/images/Feedback-3.png"
            height={400}
            width={400}
            style={{
              objectFit: "cover"
            }}
          />

          <S.ItemTitle>@jairo_bio</S.ItemTitle>
        </S.Item>
      </S.ImagesContainer>
    </S.FeedbackContainer>
  );
};

export default Review;
