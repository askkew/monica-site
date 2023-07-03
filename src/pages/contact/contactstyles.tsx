import styled from '@emotion/styled';
import { Button, FormControl, TextField } from '@mui/material';
import backgroundImg from './bugpicture.png'

export const Contactcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'clamp(700px, 50vw, 1000px)',
  marginTop: '8rem',
  '@media (max-width: 768px)': {
    marginTop: '1.5rem',
  },
})

export const Contactcard = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'clamp(700px, 60vw ,1200px)',
  // width: '800px',
  height: '500px',
  marginTop: '2rem',
  marginBottom: '4rem',
  '@media (max-width: 768px)': {
    marginTop: '10rem',
    flexDirection: 'column',
    height: 'auto',
  },
  '@media (max-width: 368px)': {
    width: '250px',
  },
})

export const StyledFormControl = styled(FormControl)({
  borderRadius: '12px 0 0 12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.75rem',
  width: 'clamp(350px,50%,600px)',
  height: '500px',
  backgroundImage: 'url(' + backgroundImg + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '@media (max-width: 768px)': {
    borderRadius: '12px 12px 0 0',
  },
  '@media (max-width: 368px)': {
    width: '80%',
  },
})

export const Namefield = styled(TextField)({
  width: '90%',
  backgroundColor: 'gainsboro',
  opacity: '0.8',
})

export const Emailfield = styled(TextField)({
  width: '90%',
  backgroundColor: 'gainsboro',
  opacity: '0.8',
})

export const Contactbutton = styled(Button)({
  width: '90%',
  opacity: '0.8',
  color: 'black',
  borderRadius: 'none',
  border: '1px solid darkgrey',
  boxShadow: 'none',
  backgroundColor: 'gainsboro',
  fontFamily: 'JetBrains Mono',
  ':hover': {
    border: '1px solid black',
    backgroundColor: 'rgba(51, 51, 51, 0.85)',
    color: 'white',
  },
  ':active': {
    backgroundColor: 'rgba(51, 51, 51, 0.85)',
    color: 'white',
  },
})

export const Contactsocials = styled('div')({
  borderRadius: '0 12px 12px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'center',
  width: 'clamp(350px,50%,600px)',
  height: '500px',
  backgroundColor: 'rgba(51, 51, 51, 0.65)',
  '@media (max-width: 768px)': {
    borderRadius: '0 0 12px 12px',
  },
  '@media (max-width: 368px)': {
    width: '80%',
  },
})

export const Socialcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 0
})

export const Socialtitle = styled('h1')({
  backgroundColor: 'rgba(51, 51, 51, 0.85)',
  textTransform: 'uppercase',
  color: '#fff',
  padding: '0.5rem',
  fontSize: 'large',
  letterSpacing: '0.5rem',
  marginBottom: 0,
})

export const Socialdesc = styled('h1')({
  textTransform: 'uppercase',
  color: '#fff',
  padding: '0.25rem',
  fontSize: 'medium',
  letterSpacing: '0.25rem',
})

export const Socialitemcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

export const Socialicon = styled('span')({
  color: '#fff',
  fontSize: '2rem',
  backgroundColor: 'rgba(51, 51, 51, 0.85)',
  borderRadius: '50%',
  padding: '0.5rem 0.8rem 0.5rem 0.8rem',
})

export const Socialname = styled('h1')({
  textTransform: 'uppercase',
  color: '#fff',
  padding: '0.25rem',
  fontWeight: 700,
  fontSize: 'medium',
  letterSpacing: '0.25rem',
})

export const Socialdetail = styled('h1')({
  textTransform: 'uppercase',
  color: 'darkgrey',
  padding: '0.25rem',
  fontSize: 'small',
  letterSpacing: '0.25rem',
})