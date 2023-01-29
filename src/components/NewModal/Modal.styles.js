import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  display: ${(props) => (props.active ? "grid" : "none")};
  place-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
`;

export const ModalBackdrop = styled.div`
  background: #22222277;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Modal = styled.div`
  position: relative;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background: #222222;
  border-radius: 1em;
  min-width: 14em;
`;

export const CloseBtn = styled.button`
  position: absolute;
  cursor: pointer;
  width: 1em;
  height: 1em;
  top: 10px;
  right: 10px;
  border: none;
  border-radius: 50%;
  background-image: url("/svg/Exit_SVG.svg");
  background-color: hsl(0, 0%, 50%);
  background-position: center;
  background-repeat: no-repeat;
`;

export const ModalTitle = styled.h3`
  margin-bottom: 1rem;
`;

export const ModalContent = styled.div`
  border: 1px solid hsl(0, 0%, 50%);
  border-radius: 0.5rem;
  padding: inherit;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  label {
    align-self: flex-start;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
`;
