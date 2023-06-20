import React from 'react'
import { Contactbutton, Contactcard, Contactcontainer, Contactsocials, Emailfield, Namefield, Socialcontainer, Socialdesc, Socialdetail, Socialicon, Socialitemcontainer, Socialname, Socialtitle, StyledFormControl } from './contactstyles'
import { Button, FormControl, TextField } from '@mui/material'
import Leg from '../../components/leg'
import { AiFillPhone } from 'react-icons/ai'
import { SiMinutemailer } from 'react-icons/si'
import { MdLocationPin } from 'react-icons/md'

const Socialforms = [
  {
    name: 'Location',
    detail: 'Houston, TX',
    icon: <MdLocationPin />,
  },
  {
    name: 'Phone',
    detail: '999-999-9999',
    icon: <AiFillPhone />,
  },
  {
    name: 'Email',
    detail: 'test@test.com',
    icon: <SiMinutemailer />,
  },
]

export const ContactForm = () => {
  return (
    <Contactcard>
      <StyledFormControl>
        
        <Namefield variant="outlined" id="mui-theme-provider-outlined-input" label="Name" />
        <Emailfield variant="outlined" id="mui-theme-provider-outlined-input" label="Email" />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={7}
          style={{width: '90%'}}
        />
        <Contactbutton variant="outlined">Send</Contactbutton>
      </StyledFormControl>
      <Contactsocials>
        <Socialcontainer>
          <Socialtitle>Contact Information</Socialtitle>
          <Socialdesc>My other forms of contact!</Socialdesc>
        </Socialcontainer>
        <Socialcontainer style={{gap: 40, padding: '2rem'}}>
          {Socialforms.map((social) => (
            <Socialitemcontainer>
              <Socialicon>{social.icon}</Socialicon>
              <Socialname>{social.name}:</Socialname>
              <Socialdetail>{social.detail}</Socialdetail>
            </Socialitemcontainer> 
          ))}
        </Socialcontainer>
      </Contactsocials>
    </Contactcard>
  )
}

const Contact = () => {
  return (
    <Contactcontainer>
      <ContactForm />
      <Leg />
    </Contactcontainer>
  )
}

export default Contact