import React, { PropsWithChildren } from 'react'
import { IconType } from 'react-icons/lib'

import { Container, InputComponent } from './style'

export interface Props extends React.InputHTMLAttributes<any> {
  backgroundColor?: string;
  color?: string;
  placeholderColor?: string;
  icon?: IconType;
}

export const Input: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  const {icon: Icon} = props
  return (
    <Container {...props}>
      {Icon && <Icon size={18} style={{marginRight: 5}} color={props.placeholderColor} />}
      <InputComponent {...props} />
    </Container>
  )
}
