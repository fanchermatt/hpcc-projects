import React from "react";
import { Wrapper, Left, Right } from "./header.styles";
import logo from "../../images/hpccsystems-logo.png";
import Navigation from "../navigation/navigation";
import Search from "../search/search";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
  return (
    <Wrapper>
      <Left>
        <a href="/">
          <img src={logo} alt="hpcc-systems logo" />
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
