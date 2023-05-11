import styled from "styled-components";

export const Wrapper = styled.div`
  margin-right: 2rem;
  border-radius: 0.8rem;

  input {
    color: var(--text);
  }
  input::placeholder {
    color: var(--text);
  }

  .ant-input-group-wrapper {
    background-color: var(--background);
    color: var(--text);
    border-color: var(--border);
  }
  .ant-input-search {
    background-color: var(--inner-background);
    color: var(--text);
    border-color: var(--border);
  }

  .ant-input-affix-wrapper {
    background-color: var(--background);
    color: var(--text);
    border-color: var(--border);
  }

  .anticon-search {
    background-color: var(--background);
    color: var(--text);
    border-color: var(--border);
  }

  svg {
    color: var(--text);
  }
`;
