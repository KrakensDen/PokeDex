import styled, { keyframes } from "styled-components";

const anim = keyframes`

`;
export const ToolTip = styled.div`
  position: relative;
  font-family: sans-serif;
  font-weight: bold;
  width: max-content;
  height: max-content;

  & .tooltip-text {
    position: absolute;
    background: #222222cc;
    width: max-content;
    font-size: 10px;
    color: #ffffffaa;
    right: calc(50% - 10px);
    bottom: 110%;
    padding: 1px 6px;
    border-radius: 0.25em;
    opacity: 0;

    transform-origin: bottom right;
    transform: scale(0);

    transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
  }

  .tooltip-text::after {
    content: "";
    position: absolute;
    z-index: 50;
    width: 6px;
    height: 6px;
    background: #22222255;
    top: calc(100% - 3px);
    right: 7px;
    border-radius: 0 0 0.1em 0;
    transform: rotate(45deg);
    clip-path: polygon(100% 0, 100% 100%, 0% 100%);
  }

  &:hover .tooltip-text {
    transform: scale(1);

    opacity: 1;
  }
`;
