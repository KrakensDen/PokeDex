import styled from "styled-components";

export const CardContainer = styled.div`
  width: calc(${(props) => props.theme.card.width} / 2);
  height: calc(${(props) => props.theme.card.height} / 2);
`;

export const Card = styled.div`
  box-shadow: 5px 5px 10px #22222255;
  width: calc(${(props) => props.theme.card.width} / 2);
  height: calc(${(props) => props.theme.card.height} / 2);
  background: radial-gradient(
    circle at center,
    #888888aa 0,
    #555555cc,
    #222222dd 100%
  );
  border: 5px solid rgb(255, 239, 132);
  outline: 1px solid #22222233;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Type = styled.div`
  pointer-events: none;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 10px;
  width: 24px;
  top: 3px;
  left: 4px;
  font-family: Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-style: italic;
  font-size: 8px;
  font-weight: 600;
  color: #222222;
  background: azure;
  border-radius: 0.3rem;
`;

export const Name = styled.div`
  pointer-events: none;
  font-family: Segoe UI, sans-serif;
  font-weight: 600;
`;

export const TopContainer = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: #d9c853;
  height: 15%;
  width: 100%;
`;

export const PokeImg = styled.div`
  width: calc(235px / 2);
  height: calc(170px / 2);
  margin-top: 7px;
  color: #fff;
  background: radial-gradient(
    circle at center,
    rgba(255, 239, 132, 0.8) 0,
    rgba(252, 168, 101, 0.88),
    rgba(246, 49, 49, 0.75) 100%
  );
  background-clip: padding-box; /* !importanté */
  border: solid 4px transparent; /* !importanté */
  border-radius: 0.3em;

  position: relative;
  padding: 30% 2em;
  box-sizing: border-box;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -4px; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(to right, #00e0ff, #ff26f4);
  }

  img {
    position: absolute;
    top: -3px;
    left: -3px;
    height: inherit;
    width: inherit;
    object-fit: cover;
  }
`;
