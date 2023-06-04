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
  height: 'clamp(600px, 60vw, 800px)',
  width: 'clamp(200px, 70vw, 1200px)',
})

export const ResultsParallax = styled(Parallax)({
  position: 'relative',
  height: '40vh',
  width: '100%',
})

export const ResultsTitle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '5rem',
  position: 'absolute',
  width: '100%',
})

export const ResultsTitleText = styled('span')({
  backgroundColor: '#333',
  textTransform: 'uppercase',
  color: '#fff',
  padding: '1rem',
  fontSize: '2.5rem',
  letterSpacing: '10px',
})

export const ResultsSubtitle = styled('span')({
  backgroundColor: '#333',
  textTransform: 'uppercase',
  color: '#fff',
  padding: '1rem',
  fontSize: '1.7rem',
  letterSpacing: '10px',
})

export const Resultcardimage = styled('img')({
  height: '80%',
})