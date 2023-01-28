import styled, { css } from "styled-components";

export const OuterContainer = styled.div`
  :root {
  }

  position: relative;
  height: var(--card-height);
  width: var(--card-width);
  border-radius: 0.35rem;
  z-index: ${(props) => (props.active ? 3 : 1)};

  ${(props) =>
    props.shiny &&
    css`
      pointer-events: auto;
    `}
`;
export const CardContainer = styled.div`
  height: inherit;
  width: inherit;
  border-radius: 0.35rem;
  pointer-events: inherit;

  ${(props) =>
    props.active &&
    css`
      order: 2;
    `}
`;

export const CardFront = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background: linear-gradient(
    45deg,
    ${(props) => props.color},
    ${(props) => props.color2}
  );
  background-size: cover;
  z-index: 100;

  transition: 500ms;

  .pokemon-img {
    position: relative;
    z-index: 100;
    max-width: 100%;
    object-fit: cover;
    margin-bottom: -10px;
  }

  ${(props) =>
    props.active &&
    css`
      box-shadow: 4px 7px 5px #11111177;

      transform: translate3d(0, -2rem, 2rem);
    `}
`;

export const Background = styled.div`
  border-radius: inherit;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: inherit;
    filter: grayscale(100%);
  }
`;

export const Name = styled.p`
  text-align: center;
  font-family: sans-serif;
  font-weight: 600;
  color: #222222;
`;

export const Types = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.25rem 1rem;

  & > * {
    margin: 0 5px;
  }
`;

export const Id = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 6%;
  background: #222222;
  color: azure;
  width: fit-content;
  height: 2em;
  padding: 0 2px 3px 2px;
  clip-path: polygon(100% 0, 100% 100%, 50% 85%, 0% 100%, 0% 0%);
`;
export const Shiny = styled.div`
  position: absolute;
  z-index: 200;
  left: 3px;
  top: 3px;
  cursor: pointer;
  background-image: url("/images/Glare.png");
  background-size: cover;
  background-position-x: -3px;

  img {
    pointer-events: none;
    height: 15px;
    width: 15px;
  }
`;

export const CardBack = styled.div`
  position: absolute;
  top: 0;
  z-index: 50;
  display: flex;
  flex-direction: column-reverse;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background: #333333;
  transform-origin: top;

  transition: 500ms;

  ${(props) =>
    props.active &&
    css`
      box-shadow: 2px 2px 7px #111111cc;
      transform: scale(1.7, 1.6);
    `}
`;

export const AddToTeam = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 0.25rem 0;
  font-size: 10px;
`;
export const Stat = styled.div`
  padding: 0 2px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    border-right: 1px solid azure;
  }
`;

export const Abilities = styled.div`
  height: max-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;

  grid-template-areas:
    "title title"
    "ability ability"
    "ability ability";

  font-size: 8px;
  margin: 0.5rem 0.25rem;

  h6 {
    text-align: center;
    grid-area: title;
  }

  & > *:not(h6) {
    padding: 2px 0;
    text-align: center;
    background: transparent;
    border: 1px solid #222222;
    border-radius: 0.25rem;
  }
`;

export const Ability = styled.div``;
