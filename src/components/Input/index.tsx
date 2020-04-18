import React from 'react'
import { IconType } from 'react-icons/lib'

import { Container, InputComponent } from './style'

export interface Props {
  placeholder?: string;
  backgroundColor?: string;
  color?: string;
  placeholderColor?: string;
  icon?: IconType;
  type?: string;
  maxLength?: number;
  minLength?: number;
  id?: string;
  name?: string;
  readonly?: boolean;
  disabled?: boolean;
  size?: number;
  max?: number;
  min?: number;
}

export const Input: React.FC<Props> = ({
  placeholder = "Digite aqui...",
  placeholderColor = "#999",
  backgroundColor = "#212121",
  color = "#fff",
  icon: Icon,
  type = "text",
  maxLength,
  minLength,
  id,
  name,
  readonly,
  disabled,
  size,
  max,
  min,
}) => {
  return (
    <Container disabled={disabled} backgroundColor={backgroundColor} placeholderColor={placeholderColor}>
      {Icon && <Icon size={18} style={{marginRight: 5}} color={placeholderColor} />}
      <InputComponent
        type={type}
        id={id}
        placeholder={placeholder}
        placeholderColor={placeholderColor}
        color={color}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        readonly={readonly}
        disabled={disabled}
        size={size}
        max={max}
        min={min}
      />
    </Container>
  )
}
