import styled, { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
`;

export const Primary = styled.main`
  width: 95%;
  margin: 0 auto;
  margin-top: 8rem;
  background-color: var(--background);
  min-height: calc(100vh - 145px);
`;

export const DarkGlobalStyles = createGlobalStyle`
{

  :root {
    --background: #132335;
    --inner-background:#45515e;
    --text: #f3f4f5;
    --border: #787d81;
    --highlight: #65a9f3;
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
    color: var(--text);
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
    color: var(--text);
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
    color: var(--text);
  }



  :focus:not(:focus-visible) {
    outline: none;
}

body{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background-color: var(--background);
  padding:0;
  margin:0;
}


  h1{
    display: block;
    font-size:3.2rem;
    font-weight: bold;
    color: var(--text);
  }
  h2{
    display: block;
    font-size:2.4rem;
    font-weight: bold;
    color: var(--text);
  }
  h3{
    display: block;
    font-size:2rem;
    font-weight: bold;
    color: var(--text);
  }
  h4{
    display: block;
    font-size:1.6rem;
    font-weight: bold;
    color: var(--text);
  }
  h5{
    display: block;
    font-size:1.3rem;
    font-weight: bold;
    color: var(--text);
  }
  h6{
    display: block;
    font-size:1.1rem;
    font-weight: bold;
    color: var(--text);
  }
  p{
    display: block;
    font-size:1.6rem;
    color: var(--text);
  }
  div{
    display:block;
    font-size:1.6rem;
    color: var(--text);
  }
  .ant-card{
    background-color:var(--inner-background);
    color:var(--text);
    border-color:var(--border);
  }

  .ant-input{
    background-color:var(--background);
    color:var(--text);
    border-color:var(--border);

  }

  .ant-btn{
    background-color:var(--background);
    color:var(--text);
    border-color:var(--border);
  }
  input::placeholder {
    color: var(--text);
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
          scroll-behavior: smooth;
    }
  }
}
`;

export const LightGlobalStyles = createGlobalStyle`
{

  :root {
    --background: #fff;
    --inner-background:#fff;
    --text: #000;
    --border: #edeeee;
    --highlight: #65a9f3;
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
    color: var(--text);
}

menu,
ol,
ul {
    padding-left: 0;
    color: var(--text);
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
    color: var(--text);
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background-color: var(--background);
  padding:0;
  margin:0;
}



  h1{
    display: block;
    font-size:3.2rem;
    font-weight: bold;
    color: var(--text);
  }
  h2{
    display: block;
    font-size:2.4rem;
    font-weight: bold;
    color: var(--text);
  }
  h3{
    display: block;
    font-size:2rem;
    font-weight: bold;
    color: var(--text);
  }
  h4{
    display: block;
    font-size:1.6rem;
    font-weight: bold;
    color: var(--text);
  }
  h5{
    display: block;
    font-size:1.3rem;
    font-weight: bold;
    color: var(--text);
  }
  h6{
    display: block;
    font-size:1.1rem;
    font-weight: bold;
    color: var(--text);
  }
  p{
    display: block;
    font-size:1.6rem;
    color: var(--text);
  }
  div{
    display:block;
    font-size:1.6rem;
    color: var(--text);
  }

  .ant-card{
    background-color:var(--inner-background);
    color:var(--text);
    border-color:var(--border);
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
          scroll-behavior: smooth;
    }
  }
}
`;
