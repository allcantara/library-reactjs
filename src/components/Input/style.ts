import styled from 'styled-components'

import { Props } from './index'

export const Container = styled.div`
  width: ${({ width }: Props) => width ? width + 'px': "100%"};
  height:  ${({ height }: Props) => height ? height + 'px': "40px"};
  border-radius: 4px;
  border-color: ${({ placeholderColor }: Props) => placeholderColor};
  border-style: solid;
  border-width: 1px;
  background-color: ${({ backgroundColor }: Props) => backgroundColor};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  cursor: ${({ disabled }: Props) => disabled ? 'not-allowed' : 'auto'};
  filter: ${({ disabled }: Props) => disabled ? 'brightness(80%)' : 'none'};
`;

export const InputComponent = styled.input`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  width: ${({ width }: Props) => width ? width + 'px': "100%"};
  color: ${({ color }: Props) => color};
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  border: none;
  background-color: transparent;
  padding: 0 5px 0 5px;
  
  &::placeholder {
    color: ${({ placeholderColor }: Props) => placeholderColor};
  }

  &:disabled {
    /* filter: brightness(80%); */
    cursor: not-allowed;
  }
`;
