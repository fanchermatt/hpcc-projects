import React, { useContext } from "react";
import {
  LightGlobalStyles,
  DarkGlobalStyles,
  Wrapper,
  Primary,
} from "./layout.styles";
import Header from "../header/header";
import Footer from "../footer/footer";
import { globalContext } from "../ContextProvider/ContextProvider";

const Layout = ({ children }) => {
  const [theme] = useContext(globalContext);

  return (
    <>
      {theme === "dark" ? <DarkGlobalStyles /> : <LightGlobalStyles />}
      <Wrapper>
        <Header />
        <Primary>{children}</Primary>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
