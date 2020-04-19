import styled from "styled-components";

import { Props } from './index'

export const Container = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  background-color: ${(props: Props) => props.backgroundColor};
  color: ${(props: Props) => props.color};
  border-color: ${(props: Props) => props.backgroundColor};
  width: ${(props: Props) => props.width + 'px'};
  height: ${(props: Props) => props.height + 'px'};
  text-transform: ${(props: Props) => props.uppercase && 'uppercase'};
  font-weight: 500;
  font-size: ${(props: Props) => props.fontSize ? props.fontSize + 'px' : '16px'};
  font-family: 'Roboto', sans-serif;
  border-radius: 4px;
  border-width: 1px;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
    margin-top: -2px;
  }

  &:active {
    filter: brightness(100%);
    margin-top: 0;
  }

  &:disabled {
    background-color: ${(props: Props) => props.backgroundColor};
    color: ${(props: Props) => props.color};
    filter: brightness(80%);
    cursor: not-allowed;
    margin-top: 0;
  }
`;

export const ContainerOutline = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  color: ${(props: Props) => props.backgroundColor};
  border-color: ${(props: Props) => props.backgroundColor};
  
  background-color: transparent;
  width: ${(props: Props) => props.width + 'px'};
  height: ${(props: Props) => props.height + 'px'};
  text-transform: ${(props: Props) => props.uppercase && 'uppercase'};
  font-weight: 500;
  font-size: ${(props: Props) => props.fontSize ? props.fontSize + 'px' : '16px'};
  font-family: 'Roboto', sans-serif;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;

  &:hover {
    background-color: ${(props: Props) => props.backgroundColor};
    color: ${(props: Props) => props.color};
    margin-top: -2px;
  }

  &:active {
    filter: brightness(90%);
    margin-top: 0;
  }

  &:disabled {
    background-color: transparent;
    color: ${(props: Props) => props.backgroundColor};
    border-color: ${(props: Props) => props.backgroundColor};
    filter: brightness(80%);
    cursor: not-allowed;
    margin-top: 0;
  }

`;