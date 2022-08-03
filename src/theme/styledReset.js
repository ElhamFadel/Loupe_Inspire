import { css } from "styled-components";

const styledReset = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background-color: #171717;
    font-family: "Roboto", sans-serif;
  }
  a {
    text-decoration: none;
  }
`;
export default styledReset;
