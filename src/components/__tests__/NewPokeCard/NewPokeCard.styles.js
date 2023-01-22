import styled, { css, keyframes } from "styled-components";

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
export const CardContainer = styled.div`
  height: inherit;
  width: inherit;
  border-radius: 0.35rem;

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
  justify-content: space-between;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background-image: url("/gif/Multi-Gradient.gif");
  background-size: cover;
  z-index: 100;

  transition: 500ms;

  .pokemon-img {
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

export const ImgMask = styled.img`
  position: absolute;
  width: inherit;
  display: none;
`;

export const Name = styled.p`
  text-align: center;
  font-family: sans-serif;
  font-weight: 600;
  color: #222222;
`;

export const Types = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0.25rem 1rem;
`;

export const Type = styled.div`
  & {
    border-radius: 50%;
    box-shadow: 1px 1px 2px #22222288;
    height: 23px;
    width: 23px;

    img {
      position: relative;
      height: 23px;
      width: 23px;
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
    bottom: 15%;
    right: 0;
    left: 0;
    border-radius: 50%;
    background: ${(props) => props.typeColor ?? "white"};
    opacity: 0;
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

export const CardBack = styled.div`
  position: absolute;
  top: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
