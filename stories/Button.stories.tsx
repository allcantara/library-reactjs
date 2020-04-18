import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '../src'

storiesOf('Button', module).add('Default', () => 
  <Button backgroundColor="#26a69a" color="#fff">Button</Button>
)
