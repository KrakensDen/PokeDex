import styled from "styled-components";

export const BG = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  background: #00000077;
  backdrop-filter: blur(0.1rem);
`;

export const Modal = styled.body`
  position: absolute;
  top: 10%;
  left: 25%;
  height: 70%;
  width: 50%;
  background: #222222;
  border-radius: 1rem;
  z-index: 300;
  padding: 3rem 1rem 1rem 1rem;
`;

export const ModalTitle = styled.h1`
  position: absolute;
  top: 10px;
  width: auto;
  font-size: 30px;
`;

export const ModalContent = styled.section`
  width: 100%;
  height: 100%;
  background: #44444444;
  border-radius: inherit;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const ExitButton = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

export const BtnContainer = styled.div`
  position: absolute;
  width: 86%;
  bottom: 20px;
  height: 4rem;
  border-radius: inherit;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
