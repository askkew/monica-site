import styled from '@emotion/styled'
import { Parallax } from 'react-parallax'

export const Resultcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
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
  justifyContent: 'center',
  margin: '2rem',
  height: '5vh',
  width: 'clamp(200px, 70vw, 1200px)',
  '@media (max-width: 768px)': {
    height: '3vh',  
  },
  '@media (max-width: 368px)': {
    height: '1.5vh',  
  }
})

export const Resultintro = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '2rem',
  height: 'clamp(150px, 8vw, 300px)',
  width: 'clamp(200px, 70vw, 1200px)',
})

export const ResultsParallax = styled(Parallax)({
  position: 'relative',
  height: '45vh',
  width: '100%',
  fiilter: 'saturate(0)',
  '@media (max-width: 768px)': {
    height: '40vh',  
  },
  '@media (max-width: 468px)': {
    height: '30vh',  
  },
})

export const ResultsTitle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '5rem',
  position: 'absolute',
  width: '100%',
  textAlign: 'center',
})

export const ResultsTitleText = styled('span')({
  backgroundColor: 'rgba(51, 51, 51, 0.85)',
  textTransform: 'uppercase',
  color: '#fff',
  padding: '1rem',
  fontSize: '2.5rem',
  letterSpacing: '10px',
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  },
  '@media (max-width: 468px)': {
    fontSize: '1.25rem',
  },
})

export const ResultsSubtitle = styled('span')({
  backgroundColor: 'rgba(51, 51, 51, 0.85)',
  textTransform: 'uppercase',
  color: '#fff',
  padding: '1rem',
  fontSize: '1.7rem',
  letterSpacing: '10px',
  '@media (max-width: 768px)': {
    fontSize: '1.25rem',
  },
  '@media (max-width: 468px)': {
    fontSize: '0.9rem',
  },
})

export const Resultcardimage = styled('img')({
  height: '35vh',
  '@media (max-width: 768px)': {
    height: '20vh',  
  },
  '@media (max-width: 468px)': {
    height: '16vh',  
  }
})

export const Separatorcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100%',
  marginTop: '2.5rem',
  '@media (max-width: 368px)': {
    flexDirection: 'column',
  }
})

export const Resultlabelcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  textAlign: 'left',
  maxWidth: '30%',
})

export const Resultlabel = styled('h1')({
  backgroundColor: 'rgba(51, 51, 51, 0.85)',
  textTransform: 'uppercase',
  color: '#fff',
  padding: '1rem',
  fontSize: '1.85vw',
  fontWeight: '800',
  letterSpacing: '4px',
  margin: 0,
  '@media (max-width: 768px)': {
    fontSize: '3.1vw',  
    padding: '0.6rem',
  },
  '@media (max-width: 368px)': {
    fontSize: '5.1vw',  
    padding: '0.6rem',
  }
})

export const Resultdetails = styled(Resultlabel)({
  fontSize: 'clamp(0.7rem, 1.5vw, 1rem)',
  fontWeight: '600',
})

export const Resultintrotitle = styled('span')({
  textTransform: 'uppercase',
  color: 'black',
  padding: '1rem',
  fontSize: '2rem',
  letterSpacing: '10px',
  fontWeight: '400',
})

export const Resultintrodescription = styled('p')({
  textAlign: 'center',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  fontSize: '0.9rem',
})