import { Parallax } from 'react-parallax';
import main from './separatorart.jpg';
import { Artseparator } from '../../pages/services/servicestyles';
import styled from '@emotion/styled';

interface SeparatorProps {
  data: {
    image: string;
    text: string;
  };
}

const Separatorcontainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '3rem',
  position: 'absolute',
  width: '100%',
})

const Separatortext = styled('h1')({
  fontSize: '3.5rem',
  fontWeight: 'bold',
  opacity: '0.7',
  backgroundColor: 'rgba(51, 51, 51, 0.85)',
  '@media (max-width: 768px)': {
    fontSize: '2rem',
  },
  '@media (max-width: 468px)': {
    fontSize: '1.25rem',
  },
  color: '#fff',
  padding: '0.5rem',
})

const Separator = ({data}: SeparatorProps) => {
  return (
    <Artseparator
    style={{
      height: '25vh',
    }}
    bgImage={data.image}
    strength={300}
    >
      <Separatorcontainer>
        <Separatortext>{data.text}</Separatortext>
      </Separatorcontainer>
    </Artseparator>
)};

export default Separator;