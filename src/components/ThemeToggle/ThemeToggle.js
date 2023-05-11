import React, { useContext } from "react";
import { Wrapper } from "./ThemeToggle.styles";
import { Switch } from "antd";
import { globalContext } from "../ContextProvider/ContextProvider";

const ThemeToggle = () => {
  const [theme, setTheme] = useContext(globalContext);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    }

    if (theme === "dark") {
      setTheme("light");
    }
  };
  return (
    <Wrapper>
      <h3 style={{ marginRight: "1rem" }}>Dark Mode</h3>
      <Switch
        style={{ marginTop: "2.5rem" }}
        onChange={() => {
          toggleTheme();
        }}
      />
    </Wrapper>
  );
};

export default ThemeToggle;
