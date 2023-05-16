import styled from 'styled-components';
// import { primary, midleGray, secondary } from 'styles/colorProvider';

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
  width: 65%;
  height: 100%;
  background-size: cover;
  background-color: blue;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100vh;
  background-color: white;

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
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: black;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    margin-top: 10px;
  }
`;

export const Div = styled.div`
  width: 50%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    margin-top: 15px;
    width: 80%;
  }
`;
export const Hr = styled.hr`
  width: 170px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 10px 0 -15px 0;

  @media (max-width: 1000px) {
    margin-top: 15px;
    width: 40%;
  }
`;

export const Logo = styled.div`
  width: 100%;
  justify-content: center;
  height: 150px;
  text-align: center;

  img{
    width: 135px;
    color: black;
  }

  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export const ForgotText = styled.a`
  margin-top: 5%;
  color: black;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    opacity: 0.7;
  }

  @media (max-width: 1000px) {
    margin-top: 8%;

    
  }
`;
