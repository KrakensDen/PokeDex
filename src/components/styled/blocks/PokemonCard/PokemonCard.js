import Image from "next/image";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import * as S from "./PokemonCard.styles";
import pokemon from "../../../__tests__/charmander.json";

const PokemonCard = ({ title, image, type }) => {
  title = title.charAt(0).toUpperCase() + title.slice(1);
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
              {type ?? pokemon.types[0].type.name}
            </S.Type>
            <S.Name active={active}>
              {title ??
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </S.Name>
          </S.TopContainer>
          <S.PokeImg active={active}>
            <Image alt={`${title} Card`} height={120} width={120} src={image} />
          </S.PokeImg>
        </S.Card>
      </Tilt>
    </S.CardContainer>
  );
};

export default PokemonCard;
