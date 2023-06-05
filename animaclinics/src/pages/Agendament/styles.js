import styled from "styled-components";
import { blue, middleGray, white } from "styles/colorProvider";

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
export const ClaimOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all ease-in-out 0.3s;
  box-sizing: border-box;
  padding: 20px;
  width: 200px;
  min-height: ${(props) => props.minHeight};
  margin: 15px 20px;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: ${(props) => props.selected ? `${white}`: `${blue}`};
  cursor: pointer;
  border: none;
  font-size: 14px;
  text-align: center;
  background-color: ${(props) => props.selected ? `${blue}`: `${white}`};

  &:hover {
    opacity: 0.7;
  }
`;

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
export const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`