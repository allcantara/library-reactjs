import React from 'react'

import { Div, Hr } from './styles'
export interface Props {
  backgroundColor?: string;
  color?: string;
}

export const Separator: React.FC<Props> = ({ backgroundColor, color }) => {
  return (
    <Div backgroundColor={backgroundColor}>
      <Hr color={color} />
    </Div>
  )
}