import styled from '@emotion/styled';
import { Button, FormControl, TextField } from '@mui/material';

export const Contactcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'clamp(700px, 50vw, 1000px)',
  marginTop: '12rem',
  '@media (max-width: 768px)': {
    marginTop: '4.5rem',
  }
})

export const Contacttitle = styled('h1')({
  fontFamily: 'JetBrains Mono',
  margin: 10,
})

export const StyledFormControl = styled(FormControl)({
  width: 'clamp(250px, 50vw, 500px)',
  gap: '1rem',
  marginBottom: '10rem',
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