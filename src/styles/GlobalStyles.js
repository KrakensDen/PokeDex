import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {

    --max-width: 1100px;
    --border-radius: 12px;
    --font-mono: 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;


    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
    --secondary-glow: linear-gradient(to bottom right,
    rgba(1, 65, 255, 0),
    rgba(1, 65, 255, 0),
    rgba(1, 65, 255, 0.3));

    --default-bg-gradient: linear-gradient(95deg, #263238aa, #212121aa);
    --card-height: 11rem;
    --card-width: 8rem;


    /*  Custom color Library  */

    /*  Reds  */
    --clr-red-50: #FFCDD2;
    --clr-red-100: #EF9A9A;
    --clr-red-300: #EF5350;
    --clr-red-500: #F44336;
    --clr-red-700: #D32F2F;
    --clr-red-900: #B71C1C;

    /*  Pinks  */
    --clr-pink-50: #F8BBD0;
    --clr-pink-100: #F48FB1;
    --clr-pink-300: #EC407A;
    --clr-pink-500: #E91E63;
    --clr-pink-700: #C2185B;
    --clr-pink-900: #880E4F;

    /*  Purples  */
    --clr-purple-a: #AA00FF;
    --clr-purple-50: #E1BEE7;
    --clr-purple-100: #CE93D8;
    --clr-purple-300: #AB47BC;
    --clr-purple-500: #9C27B0;
    --clr-purple-600: #8E24AA;
    --clr-purple-700: #7B1FA2;
    --clr-purple-900: #4A148C;

    /* Deep Purples  */
    --clr-deep-purple-a: #6200EA;
    --clr-deep-purple-50: #D1C4E9;
    --clr-deep-purple-100: #B39DDB;
    --clr-deep-purple-300: #9575CD;
    --clr-deep-purple-500: #673AB7;
    --clr-deep-purple-700: #512DA8;
    --clr-deep-purple-900: #311B92;


    /* Indigo  */
    --clr-indigo-a: #304FFE;
    --clr-indigo-50: #C5CAE9;
    --clr-indigo-100: #7986CB;
    --clr-indigo-300: #5C6BC0;
    --clr-indigo-500: #3F51B5;
    --clr-indigo-700: #303F9F;
    --clr-indigo-900: #1A237E;

    /* Blue  */
    --clr-blue-a: #2962FF;
    --clr-blue-50: #BBDEFB;
    --clr-blue-100: #90CAF9;
    --clr-blue-300: #42A5F5;
    --clr-blue-500: #2196F3;
    --clr-blue-700: #1976D2;
    --clr-blue-900: #0D47A1;


    /* Cyan  */
    --clr-cyan-a: #00B8D4;
    --clr-cyan-vibrant: #18FFFF;
    --clr-cyan-50: #B2EBF2;
    --clr-cyan-100: #80DEEA;
    --clr-cyan-300: #4DD0E1;
    --clr-cyan-500: #00BCD4;
    --clr-cyan-700: #0097A7;
    --clr-cyan-900: #006064;

    /* Teal  */
    --clr-teal-a: #00BFA5;
    --clr-teal-vibrant: #1DE9B6;
    --clr-teal-50: #B2DFDB;
    --clr-teal-100: #80CBC4;
    --clr-teal-300: #4DB6AC;
    --clr-teal-500: #009688;
    --clr-teal-700: #00796B;
    --clr-teal-900: #004D40;

    /* Green  */
    --clr-green-a: #00C853;
    --clr-green-vibrant: #00E676;
    --clr-green-50: #C8E6C9;
    --clr-green-100: #A5D6A7;
    --clr-green-300: #81C784;
    --clr-green-500: #4CAF50;
    --clr-green-700: #388E3C;
    --clr-green-900: #1B5E20;

    /* Light Green  */
    --clr-light-green-a: #64DD17;
    --clr-light-green-vibrant: #B2FF59;
    --clr-light-green-50: #DCEDC8;
    --clr-light-green-100: #C5E1A5;
    --clr-light-green-300: #AED581;
    --clr-light-green-500: #8BC34A;
    --clr-light-green-700: #689F38;
    --clr-light-green-900: #33691E;


    /* Lime  */
    --clr-lime-a: #AEEA00;
    --clr-lime-vibrant: #C6FF00;
    --clr-lime-50: #F0F4C3;
    --clr-lime-100: #E6EE9C;
    --clr-lime-300: #DCE775;
    --clr-lime-500: #CDDC39;
    --clr-lime-700: #AFB42B;
    --clr-lime-900: #827717;


    /* Yellow  */
    --clr-yellow-a: #FFD600;
    --clr-yellow-vibrant: #FFFF00;
    --clr-yellow-50: #FFF9C4;
    --clr-yellow-100: #FFF59D;
    --clr-yellow-300: #FFF176;
    --clr-yellow-500: #FFEB3B;
    --clr-yellow-700: #FBC02D;
    --clr-yellow-900: #F57F17;

    /* Amber  */
    --clr-amber-a: #FFAB00;
    --clr-amber-vibrant: #FFD740;
    --clr-amber-50: #FFECB3;
    --clr-amber-100: #FFE082;
    --clr-amber-300: #FFD54F;
    --clr-amber-500: #FFC107;
    --clr-amber-700: #FFA000;
    --clr-amber-900: #FF6F00;

    /* Orange  */
    --clr-orange-a: #FF6D00;
    --clr-orange-vibrant: #FF9100;
    --clr-orange-50: #FFE0B2;
    --clr-orange-100: #FFCC80;
    --clr-orange-300: #FFB74D;
    --clr-orange-500: #FF9800;
    --clr-orange-700: #F57C00;
    --clr-orange-900: #E65100;

    /* Deep Orange  */
    --clr-deep-orange-a: #DD2C00;
    --clr-deep-orange-vibrant: #FF3D00;
    --clr-deep-orange-50: #FFCCBC;
    --clr-deep-orange-100: #FFAB91;
    --clr-deep-orange-300: #FF8A65;
    --clr-deep-orange-500: #FF5722;
    --clr-deep-orange-700: #E64A19;
    --clr-deep-orange-900: #BF360C;

    /* Brown */
    --clr-brown-50: #D7CCC8;
    --clr-brown-100: #BCAAA4;
    --clr-brown-300: #A1887F;
    --clr-brown-400: #8D6E63;
    --clr-brown-500: #795548;
    --clr-brown-700: #5D4037;
    --clr-brown-800: #4E342E;
    --clr-brown-900: #3E2723;

    /* Gray */
    --clr-gray-50: #FAFAFA;
    --clr-gray-100: #F5F5F5;
    --clr-gray-200: #EEEEEE;
    --clr-gray-300: #E0E0E0;
    --clr-gray-400: #BDBDBD;
    --clr-gray-500: #9E9E9E;
    --clr-gray-600: #757575;
    --clr-gray-700: #616161;
    --clr-gray-800: #424242;
    --clr-gray-900: #212121;

    /* Blue Gray */
    --clr-blue-gray-50: #ECEFF1;
    --clr-blue-gray-100: #CFD8DC;
    --clr-blue-gray-200: #B0BEC5;
    --clr-blue-gray-300: #90A4AE;
    --clr-blue-gray-400: #78909C;
    --clr-blue-gray-500: #607D8B;
    --clr-blue-gray-600: #546E7A;
    --clr-blue-gray-700: #455A64;
    --clr-blue-gray-800: #37474F;
    --clr-blue-gray-900: #263238;


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
