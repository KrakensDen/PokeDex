import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import * as S from "./PokemonCard.styles";
import pokemon from "../../../__tests__/charmander.json";

const PokemonCard = ({ title, image, type }) => {
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <S.CardContainer>
      <Tilt
        scale={0.97}
        glareColor={"rgba(255,238,158,0.70)"}
        glareEnable={true}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
      >
        <S.Card>
          <S.TopContainer>
            <S.Type>{type ?? pokemon.types[0].type.name}</S.Type>
            <S.Name>
              {title ??
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </S.Name>
          </S.TopContainer>
          <S.PokeImg>
            <Image alt={`${title} Card`} height={120} width={120} src={image} />
          </S.PokeImg>
        </S.Card>
      </Tilt>
    </S.CardContainer>
  );
};

export default PokemonCard;
