import React, { PropsWithChildren, ReactDOM } from 'react'
import { Container, ContainerOutline } from './styles'

export interface Props extends React.ButtonHTMLAttributes<any> {
  backgroundColor: string;
  color: string;
  height: number;
  width: number;
  outline?: boolean;
  fontSize?: number;
  uppercase?: boolean;
  onClick: () => void;
}

export const Button: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return props && props.outline
  ? <ContainerOutline {...props}>
      {props.children}
    </ContainerOutline>
  : <Container {...props}>
      {props.children}
    </Container>
}
