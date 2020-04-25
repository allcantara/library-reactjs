import React, { PropsWithChildren, useState, useEffect, InputHTMLAttributes, ChangeEvent } from 'react'
import { IconType } from 'react-icons/lib'

import { Container, InputComponent } from './style'

export interface Props extends React.InputHTMLAttributes<any> {
  backgroundColor?: string;
  color?: string;
  placeholderColor?: string;
  borderColor?: string;
  icon?: IconType;
  focusColor?: string;
  height?: number;
  value?: string;
}

const initialState: Props = {
  backgroundColor: 'rgb(25, 24, 31)',
  color: '#fff',
  placeholderColor: '#999',
  borderColor: 'rgb(40, 39, 44)',
  focusColor: '#fad15c',
  height: 50,
}

export const Input: React.FC<Props> = (props: Props) => {
  const [stateProps, setStateProps] = useState<Props>(initialState)
  const [focusColor, setFocusColor] = useState<string>(String(initialState.focusColor))
  const [blurColor, setBlurColor] = useState<string>(String(initialState.borderColor))
  const {icon: Icon} = props
  
  useEffect(() => {
    const data = {...props}
    data.value = undefined
    data.defaultValue = props.value
    setStateProps({...initialState, ...data})
    if(props.focusColor)
      setFocusColor(String(props.focusColor))
    
    if(props.borderColor)
      setBlurColor(String(props.borderColor))
  }, [])


  
  function setOnFocus(): void {
    setStateProps({...stateProps, borderColor: focusColor})
  }

  function setOnBlur(): void {
    setStateProps({...stateProps, borderColor: blurColor})
  }

  


  return (
    <Container
      onFocus={(): void => setOnFocus()}
      onBlur={(): void => setOnBlur()}
    >
      <InputComponent {...stateProps} defaultValue={props.value} style={{ paddingLeft: Icon && 40 }} />
      {Icon && <Icon size={18} 
        style={{
          marginLeft: 20, 
          transition: 'color 0.2s', 
          position: 'absolute',
          cursor: props.disabled ? 'not-allowed' : 'auto'
        }} 
        color={stateProps.borderColor} />}
    </Container>
  )
}
