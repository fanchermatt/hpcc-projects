import React from "react";
import { Wrapper } from "./navigation.styles";

const Navigation = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <a href="/learnECL">Learn ECL</a>
        </li>
        <li>
          <a href="/Products">Projects</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navigation;
