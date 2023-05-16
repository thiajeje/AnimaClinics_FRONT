import styled from 'styled-components';
import { success, error, white, lighterGray, middleGray, darkGray } from 'styles/colorProvider';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 99%;
`;

export const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => (props.disabled ? lighterGray : white)};
  border: none;
  outline: none;
  border: 1px solid ${middleGray};
  border-color: ${(props) => props.success && success};
  border-color: ${(props) => props.error && error};
  margin-left: ${(props) => props.marginHorizontal || '0px'};
  margin-right: ${(props) => props.marginHorizontal || '0px'};
  margin-top: ${(props) => props.marginVertical || '0px'};
  margin-bottom: ${(props) => props.marginVertical || '0px'};
  margin-bottom: 1%;
  font-size: 15px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: ${(props) => props.radius || '5px'};
  height: ${(props) => props.height || '45px'};
  width: ${(props) => props.width || '300px'};
  color: ${(props) => props.disabled && middleGray};
  select {
    border: none;
    height: 85%;
    width: 99%;
    outline: none;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    height: 90%;
    width: 10%;
    width: ${(props) => (props.icon ? '10%' : '7px')};
    background-color: transparent;
    color: ${darkGray};
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`;