import styled from 'styled-components';
import { blue, primary, white } from 'styles/colorProvider';

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.outlined ? white : blue)};
  border: ${(props) => (props.outlined ? `1px solid ${blue}` : 'none')};
  outline: none;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  font-size: ${(props) => props.fontSize || '16px'};
  border-radius: 10px;
  height: ${(props) => props.height || '40px'};
  width: ${(props) => props.width || '200px'};
  color: ${(props) => (props.outlined ? blue : white)};


  &&:hover {
    opacity:${(props) => (props.outlined ? '1' : '0.8')};
    background: ${(props) => (props.outlined ? white : blue)};
    color: ${(props) => (props.outlined ? blue : white)};
;
  }
  &&:disabled {
    opacity: 0.7;
    cursor: default;
    color: ${(props) => (props.outlined ? primary : white)};
  }

  @media (max-width: 850px) {
    width: ${(props) => props.mobileWidth || '100%'};
  }
`;