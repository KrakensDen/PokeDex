import React, { useState } from "react";
import * as S from "./NewPokeCard.styles";
import charmander from "../charmander.json";
import tapu from "../tapu-koko.json";
import Tilt from "react-parallax-tilt";
import PokemonType from "../../PokemonType";

const NewPokeCard = ({ pokemon, showAddTeamModal }) => {
  const [active, setActive] = useState(false);
  const [showShiny, setShowShiny] = useState(false);

  const statNameFormatter = (statName) => {
    if (statName === "hp") {
      return statName.toUpperCase();
    }
    if (statName.startsWith("a")) {
      return "Atk";
    }
    if (statName.startsWith("d")) {
      return "Def";
    }
    if (statName.endsWith("attack") && statName.includes("-")) {
      return "SpA";
    }
    if (statName.endsWith("defense") && statName.includes("-")) {
      return "SpD";
    }
    if (statName === "speed") {
      return "Spe";
    }

    return statName;
  };
  const onClickCard = () => {
    setActive(!active);
  };
  const onShowShiny = () => {
    setShowShiny(!showShiny);
  };

  return (
    <>
      <S.OuterContainer shiny={showShiny} active={active}>
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
          <S.CardContainer
            shiny={showShiny}
            active={active}
            onClick={onClickCard}
          >
            <S.CardFront active={active}>
              <S.Shiny
                onMouseOut={onShowShiny}
                onMouseEnter={onShowShiny}
                id={"shiny"}
              >
                <img alt={"shiny toggle"} src={"/images/stars.png"} />
              </S.Shiny>
              <S.Id active={active}>{pokemon.id}</S.Id>

              {pokemon.sprites.front_default ? (
                <img
                  className={"pokemon-img"}
                  alt={`${pokemon.name} Image`}
                  src={
                    !showShiny
                      ? `/images/pokemon/official-artwork/${pokemon.id}.png`
                      : `/images/pokemon/official-artwork/shiny/${pokemon.id}.png`
                  }
                />
              ) : (
                <img
                  height={50}
                  width={50}
                  align={"center"}
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
              <S.AddToTeam>
                <img
                  onClick={(event) => showAddTeamModal(event, pokemon.id)}
                  width={10}
                  height={10}
                  alt={""}
                  src={"/images/group.png"}
                />
              </S.AddToTeam>
              <S.Stats>
                {pokemon.stats.map((stat) => (
                  <S.Stat>
                    <h5>{statNameFormatter(stat.stat.name)}</h5>
                    <h6>{stat.base_stat}</h6>
                  </S.Stat>
                ))}
              </S.Stats>
              <S.Abilities>
                <h6>Abilities:</h6>
                {pokemon.abilities.map((ability) => (
                  <S.Ability>
                    <span>{ability.ability.name}</span>
                  </S.Ability>
                ))}
              </S.Abilities>
            </S.CardBack>
          </S.CardContainer>
        </Tilt>
      </S.OuterContainer>
    </>
  );
};

NewPokeCard.defaultProps = {
  pokemon: tapu,
};

export default NewPokeCard;
