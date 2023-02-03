import styled from "styled-components";

export const DragAndDropBox = styled.div`
  --height: 300px;

  position: fixed;
  z-index: 9000;
  right: 0;
  bottom: 0;
  width: 300px;
  height: var(--height);
  border: 3px solid red;
`;

export const MainContainer = styled.div``;
export const TabGroup = styled.div`
  display: flex;
`;
export const Tab = styled.div`
  position: relative;
  background: #222222;
  border: 1px solid red;
  padding: 0.25rem 1rem;
  margin: 0 0 0 0.5rem;
  transform: skewX(40deg);
  border-radius: 0.5rem 0.5rem 0 0;

  span {
    display: block;
    transform: skewX(-40deg);
  }
`;
