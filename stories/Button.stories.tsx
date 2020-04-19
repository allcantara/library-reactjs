import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '../src'

storiesOf('Button', module).add('Default', () => 
  <Button 
    onClick={() => console.log("Minha função pelo onClick")}
    width={120}
    height={50}
    backgroundColor="#26a69a"
    color="#fff"
    uppercase
  >
    Button
  </Button>
)
