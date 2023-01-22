import React, { useState } from "react";
import * as S from "./NewPokeCard.styles";
import charmander from "../charmander.json";
import tapu from "../tapu-koko.json";
import Tilt from "react-parallax-tilt";
import pokeTypes from "./../types.json";
import ToolTip from "./../ToolTip/index";
import Link from "next/link";
import Image from "next/image";

const NewPokeCard = ({ pokemon }) => {
  const [active, setActive] = useState(false);

  const onClickCard = () => {
    setActive(!active);
  };
  return (
    <div
      style={{
        position: "relative",
        height: 11 + "rem",
        width: 8 + "rem",
        borderRadius: 0.35 + "rem",
        zIndex: active ? 3 : 1,
      }}
    >
      <Tilt
        style={{
          height: "inherit",
          width: "inherit",
        }}
        scale={active ? 1 : 0.97}
        glareColor={"rgba(255,238,158,0.3)"}
        glareEnable={true}
        tiltMaxAngleX={active ? 0 : 7}
        tiltMaxAngleY={active ? 0 : 7}
      >
        <S.CardContainer active={active} onClick={onClickCard}>
          <S.CardFront active={active}>
            <S.ImgMask src="/images/Multi-Gradient.png"></S.ImgMask>
            <S.Id active={active}>{pokemon.id}</S.Id>
            {pokemon.sprites.front_default ? (
              <img
                className={"pokemon-img"}
                alt={`${pokemon.name} Image`}
                src={pokemon.sprites.front_default}
              />
            ) : (
              <img
                className={"pokemon-img"}
                alt={`Placeholder Image`}
                src="/images/unknown-pokemon-png.png"
              />
            )}
            <S.Name>{`${
              pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
            }`}</S.Name>
            <S.Types>
              {pokemon.types.map((type) => (
                <ToolTip
                  toolTip={`${
                    type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)
                  }`}
                >
                  <S.Type typeColor={pokeTypes[`${type.type.name}`].color}>
                    <Link href={`/types/${type.type.name}`}>
                      <img
                        alt={`${type.type.name} type`}
                        src={pokeTypes[`${type.type.name}`].img}
                      />
                    </Link>
                  </S.Type>
                </ToolTip>
              ))}
            </S.Types>
          </S.CardFront>
          <S.CardBack active={active}></S.CardBack>
        </S.CardContainer>
      </Tilt>
    </div>
  );
};

NewPokeCard.defaultProps = {
  pokemon: tapu,
};

export default NewPokeCard;
