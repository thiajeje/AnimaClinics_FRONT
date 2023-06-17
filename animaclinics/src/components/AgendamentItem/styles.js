import styled from 'styled-components';
import { black, lighterGray, middleGray } from 'styles/colorProvider';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  min-height: 70px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${lighterGray};
  border-radius: 20px;
  cursor: pointer;
  margin-top: 15px;
  font-size: 13px;
  position: relative;

  .description {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    .iconCar {
      width: 5%;
      margin-left: 2%;

      @media (max-width: 1000px) {
      display: none;
      }
    }

    @media (max-width: 1000px) {
      flex-wrap: wrap;
      width: 100%;
      padding: 10px;
    }
  }

  @media (max-width: 1000px) {
    margin-bottom: 10%;
    height: auto;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  margin-left: 4%;
  width: 80%;

  @media (max-width: 1000px) {
    width: 80%;
    align-items: right;
    margin-bottom: 10px;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  width: 25%;

  @media (max-width: 1000px) {
    display: none;
    width: 80%;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  color: ${(props) => props.color || black};
  font-weight: 500;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: ${(props) => props.color || middleGray};
  margin: 0;
`;
