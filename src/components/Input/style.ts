import styled from 'styled-components'

import { Props } from './index'

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: ${({ disabled }: Props) => disabled ? 'not-allowed' : 'auto'};
  filter: ${({ disabled }: Props) => disabled ? 'brightness(80%)' : 'none'};
`;

export const InputComponent = styled.input`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  max-width: 100%;
  width: ${({ width }: Props) => width ? width + 'px' : '100%'};
  height:  ${({ height }: Props) => height + 'px'};
  background-color: ${({ backgroundColor }: Props) => backgroundColor};
  border-color: ${({ borderColor }: Props) => borderColor};
  color: ${({ color }: Props) => color};
  font-size: 16px;
  border-radius: 4px;
  border-style: solid;
  border-width: 2px;
  padding: 0 10px;
  margin: 5px;
  transition: border-color 0.2s;
  
  &::placeholder {
    color: ${({ placeholderColor }: Props) => placeholderColor};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    outline-offset: none;
    border-color: ${({ focusColor }: Props) => focusColor};
    border-radius: 4px;
    border-style: solid;
    border-width: 2px;
  }
`;
