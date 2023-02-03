import styled, { css } from "styled-components";

/**
 Props:
 - color = any built in html color will work and will change the background color of the main element * also will
 automatically change the foreground color to the respective contrasted color.
 (i.e. color={'white'} means the foreground will be black to allow for easy reading)
 - glow = Turns the button into a neon sign version of the button with hover effects.
 - activated = turns the button into one that keeps a bottom border when clicked on, but it doesn't keep it when
 clicked off if you want it to keep the border persistent then the href value of the button will tell it to
 keep the border when it's on that route.
 **/

export const Button = styled.a.attrs({
  className: "btn-default",
})`
  :root {
    --clr-neon: hsl(317 100% 54%);
    --clr-bg: hsl(323 21% 16%);
  }

  position: relative;
  z-index: 100;
  display: inline-block;
  text-decoration: none;
  padding: 0.25em 2em;
  color: ${({ color }) => color ?? "#41a5ee"};
  cursor: pointer;
  border-radius: 0.75rem;
  border: ${({ color }) => color ?? "none"} 0px solid;
  overflow: hidden;
  background: ${({ color }) => color ?? "#41a5ee"};
  user-select: none;

  transition: all 500ms ease-in-out;

  p {
    position: relative;
    z-index: 300;
    opacity: 0.9;
    color: inherit;
    filter: invert(1) grayscale(1) contrast(40);
    font-family: "Oswald", sans-serif;
    font-weight: 600;
    pointer-events: none;
  }

  span {
    position: absolute;
    background-color: inherit;
    filter: invert(1) grayscale(1);
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 50%;
    z-index: 200;
    animation: animate 700ms linear infinite;
  }

  /*  Enabling Transparent Backgrounds on the Button  */

  ${(props) =>
    props.transparent &&
    css`
      background: transparent;
      color: #111;
    `};

  /*  Enabling Consistent Border depending on the page youre on  */
  ${(props) =>
    props.href &&
    props.activated &&
    css`
      border-bottom: ${({ href, route, color }) =>
        href === route ? `3px solid ${color}` : " none"};
    `};

  /*  Enabling This will make the button keep a border bor as long as it is active/focused */

  ${(props) =>
    props.activated &&
    css`
      &[active] {
        border-bottom: 5px solid
          ${({ color }) => (color ? color + "44" : "#ffffffaa")};
      }
    `};

  ${(props) =>
    props.bordered &&
    css`
      border: 1px solid #222222bb;
    `};

  /* The Neon Button */
  ${(props) =>
    props.glow &&
    css`
      font-size: 1.2rem;
      display: inline-block;
      cursor: pointer;
      text-decoration: none;
      color: ${({ color }) => color ?? "var(--clr-neon)"};
      background: transparent;
      border: ${({ color }) => color ?? "var(--clr-neon)"} 0px solid;
      padding: 7px 30px;
      position: relative;
      z-index: 1;
      text-shadow: 0 0 0.125em ${({ color }) => color ?? "var(--clr-neon)"},
        0 0 0.25em currentColor;

      transition: all 500ms ease-in-out;

      p {
        filter: none;
      }

      &:before {
        pointer-events: none;
        content: "";
        position: absolute;
        background: ${({ color }) => color ?? "var(--clr-neon)"};
        top: 100%;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;

        transition: all 500ms ease-in-out;

        transform: perspective(1em) rotateX(40deg) scale(1, 0.35);

        filter: blur(1em);
        opacity: 0;
      }

      &:focus,
      :hover {
        background: ${({ color }) => color ?? "var(--clr-neon)"};
        color: ${({ color }) => color ?? "var(--clr-bg)"};
        text-shadow: none;
        box-shadow: 0 0 11px ${({ color }) => color ?? "var(--clr-neon)"};

        p {
          filter: invert(1) grayscale(1) brightness(5);
        }
      }

      &:focus::before,
      :hover::before {
        opacity: 1;
      }

      ${(props) =>
        props.activated &&
        css`
          &[active] {
            border-bottom: 5px solid
              ${({ color }) => color ?? "var(--clr-neon)"};
            box-shadow: 0 9px 8px -8px ${({ color }) => color ?? "var(--clr-neon)"};
          }
        `}
    `}
`;
