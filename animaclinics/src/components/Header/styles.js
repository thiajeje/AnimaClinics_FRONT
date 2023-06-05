import styled from 'styled-components';
import { middleGray, white, black } from 'styles/colorProvider';

export const ContentArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .navigation{
    display: flex;
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    flex-direction: column;

    .select {
      display: flex;
      background-color: red;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 60px;
      background: rgb(13,77,151);
      background: linear-gradient(90deg, rgba(13,77,151,1) 35%, rgba(94,139,187,1) 66%, rgba(159,187,216,1) 100%);
      color: ${white};
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 250px;
  height: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  img{
    width: 150px;
    height: 150px;
  }

  h3{
    font-size: 34px;
    font-family: 'Montserrat';
    font-weight: 400;
    margin: 0;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-family: 'Montserrat';
  font-weight: 500;
  color: ${black};
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  :hover{
    color: ${middleGray};
  }
`;

// export const LogoutButton = styled.button`
//   display: flex;
//   color: white;
//   background: ${primary};
//   font-size: 12px;
//   border-radius: 10px;
//   width: 110px;
//   height: 30px;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
//   cursor: pointer;

//   :hover {
//     opacity: 0.7;
//   }
// `;