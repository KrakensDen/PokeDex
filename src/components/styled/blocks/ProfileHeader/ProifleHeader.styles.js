import styled from "styled-components";

export const ProfileHead = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 3);
  grid-auto-flow: column;
  margin: 2rem;
  padding: 1rem;
  border: 2px solid #222222;
  border-radius: 0.75rem;

  @media (max-width: 760px) {
    grid-auto-flow: unset;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ProfileImg = styled.div`
  place-self: flex-end;
  width: 90px;
  height: 90px;
  border: 2px solid #222222ee;
  border-radius: 0.75rem;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  @media (max-width: 760px) {
    grid-column: 1 / 2;
  }
`;

export const ProfileName = styled.div`
  place-self: flex-start;
  color: #222222;
  height: 25px;
  margin: 10px 0 0 0;
  padding: 3px 35px 20px 0;
  border-radius: 0 1rem 1rem 0;
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.78);
  text-transform: uppercase;
  font-family: Segoe UI, sans-serif;
  font-weight: 700;

  @media (max-width: 760px) {
    grid-column: 2 / 3;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TrainerLvl = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin: 5px;

  svg {
    position: relative;
    top: 0;
    left: 0;
  }

  circle {
    fill: none;
    stroke-width: 5px;
    stroke-dasharray: 125;
    stroke-dashoffset: 125;
    animation: anim ${(props) =>
      props.propgress ? (props.progress % 1) * 2 : 2}s linear forwards;

  }


  @keyframes anim {
    100% {
      stroke-dashoffset: ${(props) => 125 - props.progress * 0.01 * 125};
    }
`;

export const AccountDate = styled.div`
  margin: 1rem;
  pointer-events: none;
  place-self: center;

  @media (max-width: 760px) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }

  span {
    background-color: #424754;
    padding: 3px 11px 3px 11px;
    border-radius: 5px;
  }
`;
