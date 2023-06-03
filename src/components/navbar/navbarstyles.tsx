import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Navbarcontainer = styled('div')({
  width: '100%',
  height: '10%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000000',
  position: 'fixed',
  top: 0,
  zIndex: 100,
})

export const Navbarbuttons = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: 'clamp(700px, 50vw, 1000px)',
  alignItems: 'center',
})

export const Navlink = styled(Link)({
  textDecoration: 'none',
  color: '#ffffff',
  fontFamily: 'JetBrains Mono',
  fontSize: '1.2rem',
  cursor: 'pointer',
  '&:active': {
    color: 'gainsboro',
  }
})