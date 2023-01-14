import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 35%;
  margin: auto;
  align-items: center;
  background: transparent;
  transition: 1s all ease-in-out;

  @media (max-width: 750px) {
    width: 300px !important;
  }
  @media (min-width: 1200px) {
    width: 400px !important;
  }
`;
