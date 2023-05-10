import React, { useContext } from "react";
import { Wrapper, Left, Right } from "./header.styles";
import logo from "../../images/hpccsystems-logo.png";
import darklogo from "../../images/hpccsystems-logo-dark.png";
import Navigation from "../navigation/navigation";
import Search from "../search/search";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { globalContext } from "../ContextProvider/ContextProvider";

const Header = () => {
  const [theme] = useContext(globalContext);

  return (
    <Wrapper>
      <Left>
        <a href="/">
          {theme === "dark" ? (
            <img src={darklogo} alt="hpcc-systems logo" />
          ) : (
            <img src={logo} alt="hpcc-systems logo" />
          )}
        </a>
        <Navigation />
      </Left>
      <Right>
        <Search />
        <ThemeToggle />
      </Right>
    </Wrapper>
  );
};

export default Header;
