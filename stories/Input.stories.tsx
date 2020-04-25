import React, { useState, useEffect } from 'react'
import { FiMail } from 'react-icons/fi'
import { storiesOf } from '@storybook/react'

import { Input } from '../src'

storiesOf('Input', module).add('Default', () => {
  const [username, setUsername] = useState("")

  return (
    <Input
      placeholder="Informe seu e-mail..."
      icon={FiMail}
      type="text"
      // disabled
      value={username}
      onChange={e => setUsername(e.target.value)}
    />
  )
})
