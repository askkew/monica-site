import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const Aboutcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  // width: 'clamp(700px, 50vw, 1000px)',
  width: '100vw',
  // height: '60vh',
  marginTop: '6rem',
  '@media (max-width: 768px)': {
    marginTop: '4.5rem',
  }
})

export const Firstcard = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'auto',
})

export const Secondcard = styled(Card)({
  
})