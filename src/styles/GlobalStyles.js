import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {

    --max-width: 1100px;
    --border-radius: 12px;
    --font-mono: 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;

    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;

    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
    --secondary-glow: linear-gradient(to bottom right,
    rgba(1, 65, 255, 0),
    rgba(1, 65, 255, 0),
    rgba(1, 65, 255, 0.3));

    --default-bg-gradient: linear-gradient(95deg, #263238aa, #212121aa);
    --card-height: 11rem;
    --card-width: 8rem;
  }


  /*    CSS Reset     */
  /*  Resource: https://piccalil.li/blog/a-modern-css-reset/  */

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }


  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      transition-delay: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }


  a {
    text-decoration: none;
  }

  /*    End of CSS Reset     */


  .sign-in {
    height: 100vh;
    display: flex;
  }


  * {
    font-family: ${(props) => props.theme.fontFamily};
    color: #eee;
  }

  button {
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: bolder;
  }

  @keyframes animate {
    0% {
      width: 0;
      height: 0;
      opacity: 0.2;
    }
    100% {
      width: 400px;
      height: 400px;
      opacity: 0;
    }

  }
`;

export default GlobalStyle;
