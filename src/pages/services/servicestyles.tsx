import styled from '@emotion/styled';
import { Parallax } from 'react-parallax';

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
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '2rem',
  minHeight: '30vh',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
  }
})

export const Serviceintro = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '2rem',
  minHeight: '9vh',
})

export const ServiceParallax = styled(Parallax)({
  position: 'relative',
  height: '30vh',
  width: '100%',
  // '@media (min-width: 1920px)': {
  //   height: '25vh',
  // }
})

export const Serviceparallaxlabel = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '5rem',
  position: 'absolute',
  width: '100%',
})

export const Serviceparallaxtext = styled('span')({
  backgroundColor: 'rgba(51, 51, 51, 0.85)',
  textTransform: 'uppercase',
  color: '#fff',
  padding: '1rem',
  fontSize: '2.5rem',
  letterSpacing: '1rem',
})

export const Serviceseparatorbar = styled('div')({
  backgroundColor: 'gainsboro',
  width: '100vw',
  height: '8vh',
})

export const Artseparator = styled(Parallax)({
  position: 'relative',
  height: '25vh',
  width: '100%',
})

export const Serviceseparatorbartext = styled('h1')({
  textAlign: 'center',
  textTransform: 'uppercase',
  color: '#000',
  fontWeight: '500',
  padding: '1rem',
  fontSize: '1.5vw',
})

////Boxservicecontainer

export const Boxservicecontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'clamp(225px, 30vw, 500px)',
  height: '30vh',
  overflow: 'hidden',
  position: 'relative',
  margin: '1rem',
  borderRadius: '0.5rem',
  cursor: 'pointer',
})

export const Boxserviceimage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

export const Boxservicelabel = styled('h1')({
  position: 'relative',
  backgroundColor: 'rgba(51, 51, 51, 0.85)',
  textTransform: 'uppercase',
  zIndex: 1,
  color: '#fff',
  padding: '0.5rem',
})


//////////////