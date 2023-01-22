import React, { useState } from "react";
import * as S from "./NewPokeCard.styles";
import charmander from "../charmander.json";
import tapu from "../tapu-koko.json";
import Tilt from "react-parallax-tilt";
import PokemonType from "../../PokemonType";

const NewPokeCard = ({ pokemon }) => {
  const [active, setActive] = useState(false);

  const onClickCard = () => {
    setActive(!active);
  };
  return (
    <S.OuterContainer active={active}>
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
            {!active ? <S.Id active={active}>{pokemon.id}</S.Id> : null}

            {pokemon.sprites.front_default ? (
              <img
                className={"pokemon-img"}
                alt={`${pokemon.name} Image`}
                src={`/images/pokemon/official-artwork/${pokemon.id}.png`}
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
                <PokemonType type={type} />
              ))}
            </S.Types>
          </S.CardFront>
          <S.CardBack active={active}>
            <S.Id active={active}>{pokemon.id}</S.Id>
          </S.CardBack>
        </S.CardContainer>
      </Tilt>
    </S.OuterContainer>
  );
};

NewPokeCard.defaultProps = {
  pokemon: tapu,
};

export default NewPokeCard;
