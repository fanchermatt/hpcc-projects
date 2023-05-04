import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 6.4rem;
  padding: 0.5rem;
  background-color: rgb(255, 255, 255);
  z-index: 8;
  border-top: 1px solid rgb(237, 238, 238);
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  img {
    height: 100%;
    width: auto;
  }
`;

export const Right = styled.div`
  display: flex;
  flexdirection: row;
  justify-content: flex-end;
`;
