import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 6.4rem;
  padding: 0.5rem;
  background-color: var(--inner-background);
  z-index: 8;
  border-bottom: 1px solid var(--border);
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  img {
    height: 100%;
    width: auto;
    padding: 0.5rem;
  }
`;

export const Right = styled.div`
  display: flex;
  flexdirection: row;
  justify-content: flex-end;
  align-items: center;
`;
