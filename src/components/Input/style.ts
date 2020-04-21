import styled from 'styled-components'

import { Props } from './index'

export const Container = styled.div`
  width: ${({ width }: Props) => width ? width + 'px' : '100%'};
  height:  ${({ height }: Props) => height + 'px'};
  background-color: ${({ backgroundColor }: Props) => backgroundColor};
  border-color: ${({ borderColor }: Props) => borderColor};
  border-radius: 4px;
  border-style: solid;
  border-width: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  transition: border-color 0.2s;
  cursor: ${({ disabled }: Props) => disabled ? 'not-allowed' : 'auto'};
  filter: ${({ disabled }: Props) => disabled ? 'brightness(80%)' : 'none'};

  &:focus {
    border-color: #7159c1;
    border-radius: 4px;
    border-style: solid;
    border-width: 2px;
  }

`;

export const InputComponent = styled.input`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  width: ${({ width }: Props) => width ? width + 'px': "100%"};
  color: ${({ color }: Props) => color || '#fff'};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  border: none;
  background-color: transparent;
  padding: 0 5px 0 5px;
  
  &::placeholder {
    color: ${({ placeholderColor }: Props) => placeholderColor};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
