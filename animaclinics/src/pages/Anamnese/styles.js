import styled from "styled-components";
import { middleGray } from "styles/colorProvider";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  width: 75%;
  margin: 0 0 0 300px;

`
export const ContentArea = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5%;

  .container-calendar{
    width: 45%;
  }
  .options-area{
    display: grid;
    width: 45%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    margin-top: 40px;
  }
`

export const Title = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;

  h3{
    font-size: 18px;
  }

  span{
    color: ${middleGray};
    font-weight: 500;
  }
`