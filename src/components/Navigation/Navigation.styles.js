import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 2rem;

  ul {
    display: flex;
  }

  li {
    padding-left: 2rem;
  }
  a {
    color: var(--light-font);
    text-decoration: none;
  }
  a:hover {
    color: var(--hover-blue);
  }
`;
