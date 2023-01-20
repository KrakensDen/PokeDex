import Image from "next/image";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import * as S from "./PokemonCard.styles";
import tapu from "./../../../__tests__/tapu-koko.json";

const PokemonCard = ({ pokemon }) => {
  const [active, setActive] = useState(false);

  const onClickCard = () => {
    setActive(!active);
  };
  return (
    <S.CardContainer onClick={onClickCard} active={active}>
      <Tilt
        style={{ height: "inherit", width: "inherit" }}
        scale={0.97}
        glareColor={"rgba(255,238,158,0.70)"}
        glareEnable={true}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
      >
        <S.Card>
          <S.TopContainer>
            <S.Type active={active}>
              {pokemon.types.map((type) => (
                <span>{type.type.name}</span>
              ))}
            </S.Type>
            <S.Name active={active}>
              {pokemon.name
                ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                : ""}
            </S.Name>
          </S.TopContainer>
          <S.PokeImg active={active}>
            <Image
              alt={`${pokemon.name} Card`}
              height={120}
              width={120}
              src={pokemon.sprites.front_default}
            />
          </S.PokeImg>
        </S.Card>
      </Tilt>
    </S.CardContainer>
  );
};

PokemonCard.defaultProps = {
  pokemon: tapu,
};

export default PokemonCard;
