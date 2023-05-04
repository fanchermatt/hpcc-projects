import React from "react";
import { Wrapper } from "./ThemeToggle.styles";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const ThemeToggle = () => {
  return (
    <Wrapper>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            Dark mode
          </label>
        )}
      </ThemeToggler>
    </Wrapper>
  );
};

export default ThemeToggle;
