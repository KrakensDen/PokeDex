import styled from "styled-components";

export const Label = styled.label`
  --side-padding: 0.25rem;
  --top-padding: 0.2rem;
  --font-size: 0.9rem;

  display: inline-block;
  border-radius: 0.25rem;
  position: relative;
  font-size: var(--font-size);
  font-weight: 600;
  color: #222222aa;
  margin-top: calc(var(--font-size) + var(--top-padding));

  input:focus + span {
    top: calc(-0.9rem - var(--top-padding));
    left: var(--side-padding);
    font-size: inherit;
    color: #000;
  }

  &.medium {
    --side-padding: 0.5rem;
    --top-padding: 0.4rem;
    font-size: calc(var(--font-size) * 1.5);

    input:focus + span {
      top: calc(-1.2rem - var(--top-padding));
    }
  }

  &.large {
    --side-padding: 1rem;
    --top-padding: 0.8rem;
    font-size: calc(var(--font-size) * 2);

    input:focus + span {
      top: calc(-1.4rem - var(--top-padding));
    }
  }
`;

export const LabelSpan = styled.span`
  position: absolute;
  top: var(--top-padding);
  left: var(--side-padding);
  transition: all 0.3s;
  color: inherit;
`;

export const Input = styled.input`
  border: 0;
  border-radius: inherit;
  font-size: inherit;
  padding: var(--top-padding) var(--side-padding);
  box-shadow: inset 1px 1px 5px #44444444;
  color: #000;

  &:focus {
    outline: none;
  }
`;
