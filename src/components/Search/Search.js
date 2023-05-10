import React, { useContext } from "react";
import { Wrapper } from "./search.styles";
import { Input } from "antd";
import { globalContext } from "../ContextProvider/ContextProvider";

const Search = () => {
  const { Search } = Input;

  // const [
  //   theme,
  //   setTheme,
  //   searchTerm,
  //   setSearchTerm,
  //   searchResults,
  //   setSearchResults,
  // ] = useContext(globalContext);

  const onSearch = () => {
    console.log("searching...");
  };

  const setTerm = (term) => {
    // setSearchTerm(term);
    console.log(term);
  };

  return (
    <Wrapper>
      <Search
        placeholder="Search"
        allowClear
        onChange={setTerm("test")}
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </Wrapper>
  );
};

export default Search;
