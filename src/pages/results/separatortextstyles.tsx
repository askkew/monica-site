import styled from '@emotion/styled'

export const Separatorcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100%',
  marginTop: '2.5rem',
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
  backgroundColor: '#333',
  textTransform: 'uppercase',
  color: '#fff',
  padding: '1rem',
  fontSize: '1.25rem',
  fontWeight: '800',
  letterSpacing: '4px',
  margin: 0,
})

export const Resultdetails = styled(Resultlabel)({
  fontSize: '1rem',
  fontWeight: '600',
})