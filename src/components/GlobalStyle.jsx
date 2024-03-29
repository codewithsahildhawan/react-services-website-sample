import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62%;
    overflow-x:hidden;
}

h1 {
    color:${({theme}) => theme.colors.heading};
    font-size:4rem;
    font-weight:300;
    white-space:normal;
}

h3 {
    color:${({theme}) => theme.colors.heading};
    font-size:1rem;
    font-weight:300;
    white-space:normal;
}

p {
    color:${({theme}) => theme.colors.heading};
    font-size:1rem;
    font-weight:300;
    white-space:normal;
    line-height:1.5;
    margin-top:1rem;
}

a {
    color:${({theme}) => theme.colors.heading};
    font-size:1rem;
    font-weight:300;
    white-space:normal;
    line-height:1.5;
    margin-top:1rem;
    text-decoration:none;
}

li {
    list-style:none;
}
`;