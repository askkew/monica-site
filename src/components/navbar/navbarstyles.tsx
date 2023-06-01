import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Navbarcontainer = styled('div')({
  width: '100%',
  height: '10vh',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000000',
})

export const Navbarbuttons = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '40vw',
  alignItems: 'center',
})

export const Navlink = styled(Link)({
  textDecoration: 'none',
  color: '#ffffff',
  fontFamily: 'JetBrains Mono',
  fontSize: '1.5rem',
  cursor: 'pointer',
  '&:active': {
    color: 'gainsboro',
  }
})