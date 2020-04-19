import React from 'react'
import { FiMail } from 'react-icons/fi'
import { storiesOf } from '@storybook/react'

import { Input } from '../src'

storiesOf('Input', module).add('Default', () => {

  return (
    <Input
      placeholder="Informe seu nome"
      icon={FiMail}
      placeholderColor="#999"
      backgroundColor="#333"
      color="#999"
    />
  )
})
