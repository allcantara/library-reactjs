import React, { PropsWithChildren, useState, useEffect } from 'react'
import { Container, ContainerOutline } from './styles'

export interface Props extends React.ButtonHTMLAttributes<any> {
  backgroundColor?: string;
  color?: string;
  height?: number;
  width?: number;
  outline?: boolean;
  fontSize?: number;
  uppercase?: boolean;
  onClick?: () => void;
}

const initialState: Props = {
  backgroundColor: '#fad15c',
  color: '#212121',
  width: 120,
  height: 50,
  fontSize: 16,
}

export const Button: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  const [stateProps, setStateProps] = useState<PropsWithChildren<Props>>({...initialState})

  useEffect(() => {
    setStateProps({...initialState, ...props})
  }, [])

  return stateProps.outline
  ? <ContainerOutline {...stateProps}>
      {stateProps.children}
    </ContainerOutline>
  : <Container {...stateProps}>
      {stateProps.children}
    </Container>
}
