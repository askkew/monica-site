import styled from '@emotion/styled';
import { Button, FormControl, TextField } from '@mui/material';
import backgroundImg from './temppic.jpg'

export const Contactcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'clamp(700px, 50vw, 1000px)',
  marginTop: '8rem',
  '@media (max-width: 768px)': {
    marginTop: '4.5rem',
  }
})

export const Contactcard = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '50%',
  marginBottom: '10rem',
  '@media (max-width: 1068px)': {
    flexDirection: 'column',
  }
})

export const Emailbox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  backgroundColor: 'green',
})

export const Contacttitle = styled('h1')({
  display: 'inline-block',
  backgroundColor: 'rgba(51, 51, 51, 0.85)',
  textTransform: 'uppercase',
  color: '#fff',
  padding: '0.5rem',
  fontSize: '1.55vw',
  fontWeight: '500',
  letterSpacing: '2px',
  margin: 0,
})

export const StyledFormControl = styled(FormControl)({
  width: 'clamp(250px, 50vw, 500px)',
  gap: '0.75rem',
})

export const Names = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export const Namefield = styled(TextField)({
  width: '100%',
})

export const Emailfield = styled(TextField)({
  width: '100%',
})

export const Contactbutton = styled(Button)({
  width: '100%',
  color: 'black',
  border: '1px solid darkgrey',
  fontFamily: 'JetBrains Mono',
  ':hover': {
    border: '1px solid black',
  },
  ':active': {
    border: '2px solid #2196f3',
    color: '#2196f3',
  }
})


export const RectangleContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  margin: '4rem',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
})

export const LeftSide = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60%',
  backgroundImage: backgroundImg,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

export const RightSide = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
  width: '40%',
})
