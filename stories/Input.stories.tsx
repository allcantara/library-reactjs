import React from 'react'
import { FiMail } from 'react-icons/fi'
import { storiesOf } from '@storybook/react'

import { Input } from '../src'

storiesOf('Input', module).add('Default', () => {

  return (
    <Input
      placeholder="Informe seu nome"
    />
  )
})
