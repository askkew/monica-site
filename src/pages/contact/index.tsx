import React from 'react'
import { Contactbutton, Contactcard, Contactcontainer, Contactsocials, Emailfield, Namefield, SocialSubContainer, Socialcontainer, Socialdesc, Socialdetail, Socialicon, Socialitemcontainer, Socialname, Socialtitle, StyledFormControl } from './contactstyles'
import { Button, Divider, FormControl, TextField } from '@mui/material'
import Leg from '../../components/leg'
import { AiFillPhone } from 'react-icons/ai'
import { SiMinutemailer } from 'react-icons/si'
import { MdLocationPin } from 'react-icons/md'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { AboutTypographyDesc, Aboutdetails, Aboutdetailstext } from '../about/aboutstyles'
import secondary from './secondary2.png';
import Separator from '../../components/separator'

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': 'rgba(51, 51, 51, 0.85)',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&:before, &:after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

const Socialforms = [
  {
    name: 'Location',
    detail: 'Houston, TX',
    icon: <MdLocationPin />,
  },
  {
    name: 'Phone',
    detail: '281-948-5332',
    icon: <AiFillPhone />,
  },
  {
    name: 'Email',
    detail: 'critartconsulting@gmail.com',
    icon: <SiMinutemailer />,
  },
]


const dataTwo = {
  image: secondary,
  text: 'Get in contact with me!',
};

export const ContactForm = () => {
  const outerTheme = useTheme();
  return (
    <Contactcard>
      <StyledFormControl>
        <ThemeProvider theme={customTheme(outerTheme)}>
          <Namefield variant="filled" id="mui-theme-provider-filled-input" label="Name" />
          <Emailfield variant="filled" id="mui-theme-provider-filled-input" label="Email" />
          <TextField
            variant="filled"
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={7}
            style={{width: '90%', backgroundColor: 'gainsboro', opacity: '0.8',}}
          />
          <Contactbutton variant="contained">Send</Contactbutton>
        </ThemeProvider>
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
              <SocialSubContainer>
                <Socialname>{social.name}:</Socialname>
                <Socialdetail>{social.detail}</Socialdetail>
              </SocialSubContainer>
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
      <Separator data={dataTwo} />
      {/* <Aboutdetails style={{minHeight: '20vh', width: '100vw', justifyContent: 'center'}}>
        <Aboutdetailstext style={{textAlign: 'center'}}>
          <Divider />
          <AboutTypographyDesc>Get in contact with me if you have any questions!</AboutTypographyDesc>
          <Divider />
        </Aboutdetailstext>
      </Aboutdetails> */}
      <ContactForm />
      <Leg />
    </Contactcontainer>
  )
}

export default Contact