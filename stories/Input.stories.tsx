import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { storiesOf } from '@storybook/react'

import { Input } from '../src'

storiesOf('Input', module).add('Default', () => 
  <Input
    placeholder="Pesquisar..."
    icon={FiSearch}
    backgroundColor="#212121"
    color="#fff"
    placeholderColor="#999"
  />
)
