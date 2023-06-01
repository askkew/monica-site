import styled from '@emotion/styled';
import { FormControl, TextField } from '@mui/material';

export const Contactcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'clamp(700px, 50vw, 1000px)',
  marginTop: '4rem',
})

export const Contacttitle = styled('h1')({
  fontFamily: 'JetBrains Mono',
  margin: 10,
})

export const StyledFormControl = styled(FormControl)({
  width: 'clamp(250px, 50vw, 500px)',
  gap: '1rem',
})

export const Names = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
})

export const Namefield = styled(TextField)({
  width: '45%',
})

export const Emailfield = styled(TextField)({
  width: '100%',
})