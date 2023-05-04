import styled, { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Primary = styled.main`
  margin-top: 72px;
`;

export const GlobalStyles = createGlobalStyle`
{

  :root {
    --light-font:rgb(41, 50, 50);
    --light-background:#000;
    --dark-font: #adbac7;
    --dark-background:  #22272e;
    --dark-background-inner: #373e47;
    --hover-blue:#539bf5;
}
*,
*::before,
*::after {
    box-sizing: border-box;
    border: none;
}

img {
    display: block;
    max-width: 100%;
}
menu:not(article menu),
ol:not(article ol),
ul:not(article ul) {
    list-style: none;
}

menu,
ol,
ul {
    padding-left: 0;
}

article ol,
article ul {
    list-style-position: inside;
}

a {
    /* Places underlines below the descenders */
    text-underline-position: under;


    /* Sets the thickness as a percentage of the font size */
    text-decoration-thickness: 8;
}
label,
button,
select,
summary,
[type=radio],
[type=submit],
[type=checkbox] {
    cursor: pointer;
}

html {
    font-size: 62.5%; /* (62.5/100) * 16px = 10px */
    -webkit-text-size-adjust: none; /* for iOS Safari */
    text-size-adjust: none; /* for other mobile browsers */
  }



  :focus:not(:focus-visible) {
    outline: none;
}

body{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
}


  h1{
    display: block;
    font-size:3.2rem;
    font-weight: bold;
  }
  h2{
    display: block;
    font-size:2.4rem;
    font-weight: bold;
  }
  h3{
    display: block;
    font-size:2rem;
    font-weight: bold;
  }
  h4{
    display: block;
    font-size:1.6rem;
    font-weight: bold;
  }
  h5{
    display: block;
    font-size:1.3rem;
    font-weight: bold;
  }
  h6{
    display: block;
    font-size:1.1rem;
    font-weight: bold;
  }
  p{
    display: block;
    font-size:1.6rem;
  }
  div{
    display:block;
    font-size:1.6rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
          scroll-behavior: smooth;
    }
  }
}
`;
