import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import * as S from "./PokemonCard.styles";
import pokemon from "../../../__tests__/charmander.json";

const PokemonCard = ({ title, image }) => {
  return (
    <S.CardContainer>
      <Tilt
        glareColor={"rgba(255,238,158,0.70)"}
        glareEnable={true}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
      >
        <S.Card>
          <S.TopContainer>
            <S.Type>{pokemon.types[0].type.name}</S.Type>
            <S.Name>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
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
