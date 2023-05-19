import styled from 'styled-components';
import { white } from 'styles/colorProvider';
import background from 'assets/background.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const LeftBox = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${white};

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${background});

  @media (max-width: 1000px) {
    width: 100%;  
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 56px;
  font-weight: 400;
  color: black;
  text-align: center;
  margin-bottom: 50px;
`;

export const Div = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 130px;
  margin-bottom: 25px;
`;

export const ForgotText = styled.a`
  margin: 15px 0 0 0;
  color: black;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    opacity: 0.7;
  }

  @media (max-width: 1000px) {
    margin-top: 8%;

    
  }
`;
