import { InputGroup, Box } from '@allied-solutions/affinity'
import React from 'react'

const Sample = () => {
  const [value, setValue] = React.useState(5)
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        background: 'white',
        marginTop: '100px',
        marginLeft: '100px',
      }}
    >
      <Box maxWidth="400px">
        <InputGroup isValid={'success'}>
          <InputGroup.Input id="input" placeholder="I am a text input" />
        </InputGroup>
      </Box>
    </div>
  )
}

export default Sample
