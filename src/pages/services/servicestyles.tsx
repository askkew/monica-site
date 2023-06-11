import styled from '@emotion/styled';

export const Servicecontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  // width: 'clamp(700px, 70vw, 1000px)',
  width: '100vw',
  marginTop: '6rem',
  '@media (max-width: 768px)': {
    marginTop: '4.5rem',
  }
})

export const Lessonscontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '2rem',
  minHeight: '60vh',
})

export const Serviceintro = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '2rem',
  minHeight: '9vh',
})