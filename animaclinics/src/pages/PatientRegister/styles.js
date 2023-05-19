import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  width: 75%;
  margin: 0 0 0 300px;
  
  .button-container{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    margin-top: 20px;
  }
`;
export const Grid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 15px 35px;
`