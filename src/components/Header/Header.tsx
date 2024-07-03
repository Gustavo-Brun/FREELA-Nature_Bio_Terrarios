"use client";

import React, { useRef } from "react";

import * as S from "./styles";

import Image from "next/image";

const Header = (): React.JSX.Element => {
  const videoRef: React.RefObject<HTMLVideoElement> = useRef(null);
  const imageRef: React.RefObject<HTMLImageElement> = useRef(null);

  const handlePlay = (): void => {
    if (videoRef.current != null) {
      void videoRef.current.play();
    }

    if (imageRef.current != null) {
      imageRef.current.hidden = true;
    }
  };

  return (
    <S.Header>
      <S.Container>
        <S.VideoContainer>
          <video
            ref={videoRef}
            width={600}
          >
            <source
              src="/vid/header-video.mp4"
              type="video/mp4"
            />
            Desculpe, seu navegador não suporta vídeos HTML5.
          </video>
          <Image
            ref={imageRef}
            onClick={handlePlay}
            src="/assets/button-play.png"
            alt="button icon"
            width={120}
            height={120}
            className="absolute top-[35%] left-[35%] md:top-[40%] md:left-[40%]"
          />
        </S.VideoContainer>
        <S.TextContainer>
          <S.Title>Terrários Artesanais</S.Title>
          <S.Text>
            Adicione um toque de{" "}
            <span className="text-primary-color font-bold animate-pulse">
              natureza
            </span>{" "}
            à sua casa com nossos terrários exclusivos.
          </S.Text>
        </S.TextContainer>
      </S.Container>
    </S.Header>
  );
};

export default Header;
