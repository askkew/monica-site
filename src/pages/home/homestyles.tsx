import styled from '@emotion/styled';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

export const Homecontainer = styled('div')({
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

export const Wordsection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginBottom: '2rem',
  height: '35vh',
  // height: 'clamp(600px, 60vw, 800px)',
  width: 'clamp(200px, 70vw, 1200px)',
})

export const HomeParallax = styled(Parallax)({
  position: 'relative',
  height: '55vh',
  width: '100%',
})

export const HomeTitle = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '5rem',
  position: 'absolute',
  width: '100%',
})

export const HomeTitleText = styled('span')({
  backgroundColor: 'rgba(51, 51, 51, 0.85)',
  textTransform: 'uppercase',
  color: '#fff',
  padding: '1rem',
  fontSize: '2.5rem',
  letterSpacing: '10px',
  '@media (max-width: 768px)': {
    fontSize: '1.9rem',
  },
  '@media (max-width: 568px)': {
    fontSize: '1.4rem',
  }
})

export const Subbarbackground = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '18vh',
  backgroundColor: 'black',
  position: 'absolute',
  top: '55%',
})

export const Subbar = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '22vh',
  scale: '1.1',
  '@media (max-width: 668px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})

export const Subbarbutton = styled(Link)({
  textDecoration: 'none',
  width: '20%',
  height: '100%',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  '&:hover': {
    transition: 'all 0.3s ease-in-out',
    transform: 'scale(1.025)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    zIndex: '99',
    filter: 'grayscale(40%)',
  },
  '@media (max-width: 868px)': {
    width: '25%',
  },
  '@media (max-width: 668px)': {
    width: '100%',
  }
})

export const SubbarbuttonText = styled('span')({
  backgroundColor: 'rgba(51, 51, 51, 0.85)',
  textTransform: 'uppercase',
  color: 'white',
  padding: '1rem',
  fontSize: '1.5rem',
  letterSpacing: '10px',
  '@media (max-width: 868px)': {
    fontSize: '1.2rem',
  },
  '@media (max-width: 668px)': {
    fontSize: '0.8rem',
  },
  '@media (max-width: 348px)': {
    fontSize: '0.6rem',
    letterSpacing: '7px',
    padding: '0.5rem',
  },
  '@media (min-width: 1921px)': {
    fontSize: '2.2rem',
  },
})

export const Secondarytitle = styled('span')({
  textTransform: 'uppercase',
  color: 'black',
  padding: '1rem',
  fontSize: '2rem',
  letterSpacing: '10px',
  fontWeight: '400',
})

export const InfoTitle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: '70%',
  left: '15%',
  right: '15%',
  textAlign: 'center',
})

export const InfoTitleText = styled('div')({
  textTransform: 'uppercase',
  color: '#3A3B3C',
  padding: '1rem',
  fontSize: '1.75rem',
  fontWeight: '600',
  letterSpacing: '10px',
  '@media (max-width: 768px)': {
    fontSize: '1.9rem',
  },
  '@media (max-width: 568px)': {
    fontSize: '1.4rem',
  }
})

export const InfoTitleDescription = styled('div')({
  textTransform: 'uppercase',
  color: '#3A3B3C',
  padding: '1rem',
  fontSize: '1.2rem',
  letterSpacing: '2px',
  '@media (max-width: 768px)': {
    fontSize: '1.9rem',
  },
  '@media (max-width: 568px)': {
    fontSize: '1.4rem',
  }
})

export const InfoTitleButton = styled(InfoTitleText)({
  fontSize: '1.4rem',
  cursor: 'pointer',
  '&:hover': {
    transition: 'all 0.3s ease-in-out',
    color: 'black',
  },
})

export const Secondarydescription = styled('p')({
  textAlign: 'center',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  fontSize: '0.9rem',
})

//////

export const Infobuttoncontainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
})

//////