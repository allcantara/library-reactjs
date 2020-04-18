import React from 'react'
import { Container, ContainerOutline } from './styles'

export interface Props {
  backgroundColor: string;
  color: string;
  outline?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({ children, backgroundColor, color, outline, disabled }) => {
  return outline
  ? <ContainerOutline 
      backgroundColor={backgroundColor} 
      disabled={disabled} 
      color={color}
    >
      {children}
    </ContainerOutline>
  : <Container
      backgroundColor={backgroundColor} 
      disabled={disabled} 
      color={color}
    >
      {children}
    </Container>
}
