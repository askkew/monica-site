import styled from '@emotion/styled';

export const Legstyles = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  backgroundColor: 'rgb(34,34,34)',
  width: '100vw',
  padding: '25px',
  '@media (max-width: 750px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const Linksgrid = styled('div')({
  display: 'grid',
  width: 'clamp(700px, 50%, 1000px)',
  gridTemplateColumns: 'repeat(2, 2fr)',
})

export const Linksection1 = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.25rem',
  color: 'white',
})

export const StyledLink = styled('a')({
  textDecoration: 'underline',
  color: 'white',
  textUnderlineOffset: '0.25rem',
  '&:hover': {
    color: 'rgb(255, 255, 255, 0.5)',
  },
})