import styled from '@emotion/styled';
import { Card, Typography } from '@mui/material';

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

export const Aboutdetails = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  // width: 'clamp(250px, 70vw, 1000px)',
  width: '85vw',
  minHeight: '50vh',
  gap: '1rem',
  margin: '1rem',
  '@media (max-width: 568px)': {
    flexDirection: 'column',
  },
})

export const Aboutimage = styled('img')({
  marginBottom: '20px',
  '@media (max-width: 568px)': {
    width: '60%',
  },
})

export const Aboutdetailstext = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  justifyContent: 'flex-start',
  width: '50%',
  '@media (max-width: 768px)': {
    width: '80%',
  },
})

export const AboutTypographyTitle = styled('h1')({
  fontSize: '2.5rem',
  fontWeight: 500,
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  },
  color: '#000',
  padding: '0.5rem',
  textTransform: 'uppercase',
  letterSpacing: '0.5rem',
})

export const AboutTypographyDesc = styled('h1')({
  fontSize: '1.5rem',
  fontWeight: 500,
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  },
  color: 'rgb(104,104,104)',
  padding: '0.5rem',
})

export const AboutTypographyDescTwo = styled('h1')({
  fontSize: '1.5rem',
  fontWeight: 500,
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  },
  color: 'rgb(104,104,104)',
  padding: '0.5rem',
})