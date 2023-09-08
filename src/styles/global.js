import { createGlobalStyle } from 'styled-components';

export const Theme = createGlobalStyle`
:root {
  --white-900: #ffffff;
  --green-900: #20e0ad;
  --green-800: #41d76e;
  --green-750: #18bc9a;
  --green-700: #159e7e;
  --green-600: #159e7d;
  --grey-800: #444444;
  --grey-600: #717171;
  --grey-500: #959595;
  --grey-300: #A1A1A1;
  --grey-100: #ececec;
  --grey-50: #f9f9f9;
  --red-900: #FF0000;
  --red-850: #e74957;
  --yellow-900: #ffbe3b;  
}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.5%;
    }
    @media (max-width: 720px) {
      font-size: 87.75%;
    }
  }
  body {
    background-color: var(--white-900);
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
  }
  span, p {
    color: var(--grey-800);
    white-space: pre-line;
  }
  button {
    transition: 0.2s;
    cursor: pointer;
    :hover {
      filter: brightness(0.95);
    }
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  .pointer {
    cursor: pointer;
  }
`;
