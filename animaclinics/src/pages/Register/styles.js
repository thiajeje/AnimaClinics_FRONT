import styled from 'styled-components';
import { primary } from 'styles/colorProvider';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${primary};

  .button-container{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 80%;
    margin-top: 20px;
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
export const Title = styled.h3`
  font-size: 48px;
  font-weight: 500;
  color: white;
  text-align: center;
  margin: -110px 0 80px 0;
`;