import styled from '@emotion/styled';

export const Shopcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'clamp(700px, 50vw, 1000px)',
  marginTop: '6rem',
  '@media (max-width: 768px)': {
    marginTop: '4.5rem',
  }
})

export const Linkbox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  '@media (max-width: 650px)': {
    flexDirection: 'column',
  },
  gap: '2rem',
  marginBottom: '22rem',
})

export const Shoplink = styled('button')({
  textDecoration: 'none',
  width: '300px',
  height: '300px',
  background: 'none',
  border: '2px solid black',
  borderRadius: '10px',
  cursor: 'pointer',
})