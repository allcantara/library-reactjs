import React, { PropsWithChildren, useState, useEffect } from 'react'
import { IconType } from 'react-icons/lib'

import { Container, InputComponent } from './style'

export interface Props extends React.InputHTMLAttributes<any> {
  backgroundColor?: string;
  color?: string;
  placeholderColor?: string;
  borderColor?: string;
  icon?: IconType;
  focusColor?: string;
}

const initialState: Props = {
  backgroundColor: 'rgb(25, 24, 31)',
  color: '#212121',
  placeholderColor: '#999',
  borderColor: 'rgb(40, 39, 44)',
  focusColor: '#fad15c',
  width: 300,
  height: 40
}

export const Input: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  const [stateProps, setStateProps] = useState<PropsWithChildren<Props>>({...initialState})
  const [focusColor, setFocusColor] = useState<string>(String(initialState.focusColor))
  const [blurColor, setBlurColor] = useState<string>(String(initialState.borderColor))

  useEffect(() => {
    setStateProps({...initialState, ...props})
    if(props.focusColor)
      setFocusColor(String(props.focusColor))
    
    if(props.borderColor)
      setBlurColor(String(props.borderColor))
  }, [])

  const {icon: Icon} = props

  function setOnFocus(): void {
    setStateProps({...stateProps, borderColor: focusColor})
  }

  function setOnBlur(): void {
    setStateProps({...stateProps, borderColor: blurColor})
  }

  return (
    <Container
      {...stateProps}
      onFocus={(): void => setOnFocus()}
      onBlur={(): void => setOnBlur()}
    >
      {Icon && <Icon size={18} style={{marginRight: 5, transition: 'color 0.2s'}} color={stateProps.borderColor} />}
      <InputComponent {...stateProps} />
    </Container>
  )
}
