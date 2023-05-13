import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: blue;

  .button-container{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: red;
    width: 80%;
  }
  `
export const Grid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 15px 35px;
`