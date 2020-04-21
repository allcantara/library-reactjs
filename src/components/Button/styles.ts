import styled from "styled-components";

import { Props } from './index'

export const Container = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  background-color: ${({ backgroundColor }: Props) => backgroundColor};
  color: ${({ color }: Props) => color || '#fff'};
  border-color: ${({ backgroundColor }: Props) => backgroundColor};
  width: ${({ width }: Props) => width + 'px'};
  height: ${({ height }: Props) => height + 'px'};
  font-size: ${({ fontSize }: Props) => fontSize + 'px'};
  text-transform: ${({ uppercase }: Props) => uppercase && 'uppercase'};
  font-weight: 500;
  border-style: solid;
  font-family: 'Roboto', sans-serif;
  border-radius: 4px;
  border-width: 1px;
  cursor: pointer;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 
    0px 2px 2px 0px rgba(0,0,0,0.14), 
    0px 1px 5px 0px rgba(0,0,0,0.12);

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(100%);
  }

  &:disabled {
    background-color: ${(props: Props) => props.backgroundColor};
    color: ${(props: Props) => props.color};
    filter: brightness(80%);
    cursor: not-allowed;
  }

  &:focus {
    /* Ficar com efeito de selecionado após click */
    outline: none;
  }
`;

export const ContainerOutline = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  color: ${({ backgroundColor }: Props) => backgroundColor};
  border-color: ${({ backgroundColor }: Props) => backgroundColor};
  
  background-color: transparent;
  width: ${({ width }: Props) => width + 'px'};
  height: ${({ height }: Props) => height + 'px'};
  text-transform: ${({ uppercase }: Props) => uppercase && 'uppercase'};
  font-weight: 500;
  font-size: ${({ fontSize }: Props) => fontSize + 'px'};
  font-family: 'Roboto', sans-serif;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;

  &:hover {
    background-color: ${({ backgroundColor }: Props) => backgroundColor};
    color: ${({ color }: Props) => color};
  }

  &:active {
    filter: brightness(90%);
  }

  &:disabled {
    background-color: transparent;
    color: ${({ backgroundColor }: Props) => backgroundColor};
    border-color: ${({ backgroundColor }: Props) => backgroundColor};
    filter: brightness(80%);
    cursor: not-allowed;
  }

`;