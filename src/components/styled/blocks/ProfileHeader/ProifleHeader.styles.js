import styled from "styled-components";
import { SFlex } from "../../containers/Flex";

export const ProfileHead = styled(SFlex)`
  height: 200px;
  margin: 2rem;
  padding: 1rem;
  border: 2px solid #222222;
  border-radius: 0.75rem;
`;

export const ProfileImg = styled.div`
  width: 90px;
  height: 90px;
  border: 2px solid #222222ee;
  border-radius: 0.75rem;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const ProfileName = styled.div`
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
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TrainerLvl = styled.span`
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

  span {
    background-color: #424754;
    padding: 3px 11px 3px 11px;
    border-radius: 5px;
  }
`;
