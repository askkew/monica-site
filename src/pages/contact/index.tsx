import React from 'react'
import { Contactcontainer, Contacttitle, Emailfield, Namefield, Names, StyledFormControl } from './contactstyles'
import { TextField } from '@mui/material'

const Contact = () => {
  return (
    <Contactcontainer>
      <Contacttitle>Want to learn more?</Contacttitle>
      <Contacttitle>Get in contact with me!</Contacttitle>
      <StyledFormControl>
        <Names>
          <Namefield id="outlined-basic" label="First Name" variant="outlined"/>
          <Namefield id="outlined-basic" label="Last Name" variant="outlined" />
        </Names>
        <Emailfield id="outlined-basic" label="Email" variant="outlined" />
        <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
          />
      </StyledFormControl>
    </Contactcontainer>
  )
}

export default Contact