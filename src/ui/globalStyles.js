import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
 --black: #000000;
 --white: #ffffff;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  line-height: 1.5;
  font-size: 16px;
  margin: 0;
  background-color: var(--black);
  color: var(--white);
}

img {
  max-width: 100%;
}

.w-100 {
  width: 100%;
}

.text-center {
  text-align: center;
}

.m-auto {
  margin: auto;
}

.d-flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}
`;

export default GlobalStyles;