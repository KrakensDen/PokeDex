import React from "react";
import ToolTip from "./__tests__/ToolTip";
import pokeTypes from "../data/__test__/types.json";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: .75;
    transform: scale(.9)
  }
  100% {
    opacity: 0;

    transform: scale(1.45)

  }
`;

const PokemonType = ({ type }) => {
  return (
    <ToolTip
      toolTip={`${
        type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
      }`}
    >
      <Type typeColor={pokeTypes[`${type.type.name}`].color}>
        <Link href={`/types/${type.type.name}`}>
          <img
            alt={`${type.type.name} type`}
            src={pokeTypes[`${type.type.name}`].img}
          />
        </Link>
      </Type>
    </ToolTip>
  );
};

const Type = styled.div`
  & {
    border-radius: 50%;
    box-shadow: 1px 1px 2px #22222288;
    height: calc(var(--card-width) / 4);
    width: calc(var(--card-width) / 4);

    img {
      position: relative;
      height: calc(var(--card-width) / 4);
      width: calc(var(--card-width) / 4);
    }
  }

  &:hover {
    transition: 100ms;
    transform: scale(1.05);
  }

  &:hover::before {
    animation: ${pulse} 1200ms infinite;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 50%;
    background: ${(props) => props.typeColor ?? "white"};
    opacity: 0;
  }
`;

export default PokemonType;
