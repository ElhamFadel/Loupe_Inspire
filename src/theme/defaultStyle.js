import { createGlobalStyle } from "styled-components";
import styledReset from "./styledReset";

const GlobalStyle = createGlobalStyle`
${styledReset};
*,
*::before,
*::after{
    box-sizing: border-box;
}
:root{
    --color-primary:#015c3b;
    --mark-green:#4ba02c; //green
    --mark-pink:#f15e4a; //pink
    --mark-brown:#c17f06; //bown
    --mark-yellow:#bfbd2d; //yellow
    --marke-blue:#109788;
    --color-primary:#fff;
}
`;

export default GlobalStyle;
