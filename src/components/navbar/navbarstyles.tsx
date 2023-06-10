import styled from '@emotion/styled';
import { Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import  { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

export const Navbarcontainer = styled('div')({
  width: '100vw',
  display: 'flex',
  // flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000000',
  position: 'fixed',
  top: 0,
  zIndex: 100,
  height: '6rem',
  '@media (max-width: 768px)': {
    height: '4.5rem',
  },
  '@media (max-width: 1022px)': {
    justifyContent: 'left',
    aliignItems: 'left',
  }
})

export const NavContainer = styled('div')({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  '@media (max-width: 1022px)': {
    alignContent: "right",
    justifyContent: "right",
  },
})

export const MobileNavContainer = styled('nav')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  padding: "2rem",
})

export const StyledDrawer = styled(Drawer)({
  '& .MuiBackdrop-root': {
    backgroundColor: 'transparent !important',
  },
  '& .MuiPaper-root': {
    backgroundColor: 'black !important',
  },
}, ({ open }) => ({
  '& .MuiPaper-root': {
    top: open ? '0' : '-100%',
    transition: 'top 0.3s ease-in-out',
  },
}));

export const StyledIconButton = styled('button')({
  marginLeft: '1rem',
  backgroundColor: 'transparent',
  border: 'none',
  display: "none",
  '@media (max-width: 1022px)': {
    display: "block",
  },
})

export const StyledExitButton = styled('button')({
  marginLeft: '1rem',
  marginTop: '1rem',
  backgroundColor: 'transparent',
  border: 'none',
  display: "none",
  position: "absolute",
  left: '0',
  top: '0',
  '@media (max-width: 1022px)': {
    display: "block",
  },
})

export const StyledMenuIcon = styled(GiHamburgerMenu)({
  color: '#ffffff',
  fontSize: '2.5rem',
  cursor: 'pointer',
});

export const StyledExitIcon = styled(FaTimes)({
  color: '#ffffff',
  fontSize: '2.5rem',
  cursor: 'pointer',
});

export const Navbarbuttons = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: 'clamp(700px, 50vw, 1000px)',
  alignItems: 'center',
  '@media (max-width: 1022px)': {
    display: 'none',
  }
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