import styled from '@emotion/styled';

export const Shopcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'clamp(700px, 50vw, 1000px)',
  marginTop: '4rem',
  // border: '1px solid black',
})

export const Linkbox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  '@media (max-width: 650px)': {
    flexDirection: 'column',
  },
  gap: '2rem',
})

export const Shoplink = styled('button')({
  textDecoration: 'none',
  width: '300px',
  height: '300px',
  background: 'none',
  border: '2px solid black',
  cursor: 'pointer',
})