import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const Aboutcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'clamp(700px, 50vw, 1000px)',
  marginTop: '4rem',
  border: '2px solid green',
})

export const Firstcard = styled(Card)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'auto',
  border: '2px solid red',
})

export const Secondcard = styled(Card)({
  
})