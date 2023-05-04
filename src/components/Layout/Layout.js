import React from "react";
import { GlobalStyles, Wrapper, Primary } from "./layout.styles";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Primary>{children} </Primary>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
